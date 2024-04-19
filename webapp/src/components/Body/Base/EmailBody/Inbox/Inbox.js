import { useState, useEffect, useContext, useRef } from 'react';
import { Image, Dropdown, DropdownButton } from 'react-bootstrap';
import onClickOutside from 'react-onclickoutside';

import styles from './Inbox.module.css';

import { getApiUrl } from '../../../../../hooks/useApiUrl';
import GlobalContext from '../../../../../context/GlobalContext';
import Email from './Email/Email';
import Filter from './Filter/Filter';

const Inbox = props => {

    const { subreddit, setSubreddit, deployment } = useContext(GlobalContext);

    const { selectedEmailIndex, setSelectedEmailIndex, setSelectedEmailId, abortFetch, setLoading, inboxLoading, setInboxLoading, inboxLoadingController } = props;

    const [cachedEmails, setCachedEmails] = useState({});
    const [emails, setEmails] = useState([]);

    const [postType, setPostType] = useState('hot');
    const postTypeDisplay = {
        hot: 'Hot',
        top: 'Top (All)',
        topYear: 'Top (Year)',
        topMonth: 'Top (Month)',
        topWeek: 'Top (Week)',
        topDay: 'Top (Day)',
    }
    const [isHoverFilter, setIsHoverFilter] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const emailListEl = useRef(null);

    const { signal } = inboxLoadingController;

    const [afterName, setAfterName] = useState('') //after post name e.g. t3_uf78ut

    useEffect(() => {
        console.log(`Fetching posts: ${postType}`);
        fetchPosts(postType);
    }, [subreddit]);

    const API_URL = getApiUrl(deployment, window);

    const fetchPosts = (type, limit, after) => {
        let postFilter = '';
        switch(type){
            case 'hot':
            postFilter = `hot?`;
            break;
            case 'top':
            postFilter = `top?time=all&`
            break;
            case 'topYear':
            postFilter = `top?time=year&`
            break;
            case 'topMonth':
            postFilter = `top?time=month&`
            break;
            case 'topWeek':
            postFilter = `top?time=week&`
            break;
            case 'topDay':
            postFilter = `top?time=day&`
            break;
        }

        if(!subreddit) return;
        // console.log(`http://${window.location.hostname}:5000/${subreddit}/${postFilter}limit=${limit || 20}` + (after ? `&after=${after}` : ''));
        fetch(`https://${API_URL}/${subreddit}/${postFilter}limit=${limit || 15}` + (after ? `&after=${after}` : ''), {method: 'GET', mode: 'cors', signal})
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    setAfterName(data[data.length-1].name);
                    console.log(data[data.length-1].name);

                    if(after){
                        setEmails([...emails, ...data]);
                    }
                    else{
                        setEmails(data);
                        setSelectedEmailIndex(0);
                        emailListEl?.current?.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }

                    setInboxLoading(false);
                    
                })
                .catch(err => console.log(err)))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        console.log(selectedEmailIndex);
        if(selectedEmailIndex != null){
            console.log(emails[selectedEmailIndex]?.id || null);
            setSelectedEmailId(emails[selectedEmailIndex]?.id || null);
        }
    }, [selectedEmailIndex]);

    const markRead = index => {
        if(!emails[index].unread) return;
        
        let newEmails = emails;
        newEmails[index].unread = false;
        setEmails(newEmails);
    }
    const markUnread = index => {
        if(emails[index].unread) return;
        
        let newEmails = emails;
        newEmails[index].unread = true;
        setEmails(newEmails);
    }

    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className={styles.checkmark_img_container}>
                    <Image 
                        src={'/media/inbox/checkmark.png'}
                        className={styles.img}/>
                </div>
                <div className={`${styles.section} ${styles.focused}`}>
                    <span className={styles.text}>Focused</span>
                </div>
                <div className={styles.section}>
                    <span className={styles.text}>{inboxLoading ? 'Loading...' : isHoverFilter ? postTypeDisplay[postType] : 'Other'}</span>
                    <span className={styles.email_num}>{emails.length}</span>
                </div>
                
                <Filter {...{
                    isOpenFilter,
                    setIsOpenFilter, 
                    setIsHoverFilter,
                    setPostType,
                    fetchPosts,
                    setInboxLoading,
                    postTypeDisplay,
                }}/>
            </div>

            <div 
                className={styles.email_list} 
                ref={emailListEl}
                onScroll={e => {
                    const getLoadScrollPerc = emailCount => {
                        if(emailCount < 20) return 0.1;
                        if(emailCount < 50) return 0.5;
                        if(emailCount < 100) return 0.65;
                        if(emailCount < 400) return 0.75;
                        if(emailCount < 750) return 0.9;
                        return 0.99;
                    }

                    if(e.target.offsetHeight + e.target.scrollTop <= e.target.scrollHeight * getLoadScrollPerc(emails.length)) return;
                    if(inboxLoading) return;

                    console.log(emails.length);
                    fetchPosts(postType, Math.min(emails.length, 300), afterName);
                    setInboxLoading(true);
                }}>
            {
                subreddit && 
                <div className={styles.subreddit_title}>
                    <span className={styles.top_text}>Other: New conversations</span>
                    <span className={styles.subreddit_text}>Notifications: {subreddit}</span>
                </div>
            }
            {
                emails.length > 0 ?

                emails.map((email, i) => {
                    return <Email 
                        key={i.toString()}
                        index={i}
                        {...email}
                        selectedEmailIndex={selectedEmailIndex}
                        setSelectedEmailIndex={setSelectedEmailIndex}
                        markRead={markRead}
                        markUnread={markUnread}
                        abortFetch={abortFetch}
                        setLoading={setLoading}/>
                })

                :

                <div className={styles.no_emails_container}>
                    <Image 
                        src={'https://res.cdn.office.net/owamail/20221104009.06/resources/images/illustration_folder-hash-e058a023.svg'}
                        className={styles.img}/>
                    <span className={styles.text_bold}>Nothing in folder</span>
                    <span className={styles.text}>Looks empty over here.</span>
                </div>
            }
            </div>
        </div>
    )
}

export default Inbox;