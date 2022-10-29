import { useState, useEffect, useContext, useRef } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Inbox.module.css';

import GlobalContext from '../../../../../context/GlobalContext';
import Email from './Email/Email';

const Inbox = props => {

    const { subreddit, setSubreddit } = useContext(GlobalContext);

    const { selectedEmailIndex, setSelectedEmailIndex, setSelectedEmailId } = props;

    const [emails, setEmails] = useState([]);

    const emailListEl = useRef(null);

    useEffect(() => {
        if(subreddit){
            fetch(`http://192.168.0.98:5000/${subreddit}/hot`)
                .then(res => res.json()
                    .then(data => {
                        console.log(data);
                        setEmails(data);
                        setSelectedEmailIndex(0);

                        emailListEl?.current?.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    })
                    .catch(err => console.log(err)))
                .catch(err => console.log(err));
        }
    }, [subreddit]);

    useEffect(() => {
        console.log(selectedEmailIndex);
        if(selectedEmailIndex != null){
            console.log(emails[selectedEmailIndex].id || null);
            setSelectedEmailId(emails[selectedEmailIndex].id || null);
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
                        src={'./media/inbox/checkmark.png'}
                        className={styles.img}/>
                </div>
                <div className={`${styles.section} ${styles.focused}`}>
                    <span className={styles.text}>Focused</span>
                </div>
                <div className={styles.section}>
                    <span className={styles.text}>Other</span>
                </div>
                
                <div className={styles.filter_container}>
                    <div className={styles.img_container}>
                        <Image 
                            src={'./media/inbox/filter.png'}
                            className={styles.img}/>
                    </div>
                    <span className={styles.text}>Filter</span>
                </div>
            </div>

            <div className={styles.email_list} ref={emailListEl}>
            {
                emails.map((email, i) => {
                    return <Email 
                        key={i.toString()}
                        index={i}
                        {...email}
                        selectedEmailIndex={selectedEmailIndex}
                        setSelectedEmailIndex={setSelectedEmailIndex}
                        markRead={markRead}
                        markUnread={markUnread}/>
                })
            }
            </div>
        </div>
    )
}

export default Inbox;