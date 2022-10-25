import { useState, useEffect, useContext } from 'react';
import { Image, Button } from 'react-bootstrap';
import parse from 'html-react-parser';

import styles from './Content.module.css';

import GlobalContext from '../../../../../context/GlobalContext';
import { convertSecondsToDate } from '../../../../../hooks/useConvertSecondsToDate';

const Content = props => {

    const { subreddit, setSubreddit } = useContext(GlobalContext);

    const { selectedEmailId } = props;

    // const { author, title, body, unread } = selectedEmail;

    const [selectedEmail, setSelectedEmail] = useState({});

    useEffect(() => {
        if(selectedEmailId && subreddit){
            fetch(`http://localhost:5000/${subreddit}/post/${selectedEmailId}`)
                .then(res => res.json()
                    .then(data => {
                        setSelectedEmail(data);
                    })
                    .catch(err => console.log(err))
                )
                .catch(err => console.log(err));
        }
    }, [selectedEmailId, subreddit]);

    return (
        
        <div className={styles.main}>
            {
                Object.keys(selectedEmail).length > 0 ?
                <>
                    <div className={styles.header}>
                        <span className={styles.title}>Comments: {selectedEmail.title}</span>
                        <div className={styles.zoom_options}>
                            <Image 
                                src={'./media/content/zoom_in.png'}
                                className={styles.zoom_in_img}/>
                            <Image
                                src={'./media/content/dropdown.png'}
                                className={styles.dropdown_img}/>
                        </div>
                    </div>
                    <div className={styles.body_container}>
                        <div className={styles.body}>

                            <div className={styles.profile_icon_container}>
                                <div className={styles.profile_icon}>
                                    <span className={styles.text}>{selectedEmail.author.slice(0, 2).toUpperCase()}</span>
                                </div>
                            </div>

                            <div className={styles.content}>

                                <div className={styles.first_row}>
                                    <span className={styles.author}>{selectedEmail.author}</span>
                                    <div className={styles.actions}>
                                        <div className={styles.action}>
                                            <Image 
                                                src={'./media/content/smiley_face.png'}
                                                className={styles.img}/>
                                        </div>
                                        <div className={styles.action}>
                                            <Image 
                                                src={'./media/content/reply.png'}
                                                className={styles.img}/>
                                        </div>
                                        <div className={styles.action}>
                                            <Image 
                                                src={'./media/content/reply_all.png'}
                                                className={styles.img}/>
                                        </div>
                                        <div className={styles.action}>
                                            <Image 
                                                src={'./media/content/forward.png'}
                                                className={styles.img}/>
                                        </div>
                                        <div className={styles.action}>
                                            <Image 
                                                src={'./media/content/more.png'}
                                                className={styles.img}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.second_row}>
                                    <div className={styles.likes}>
                                        Cc: Yam Lao Tay /CSF, Calvin Lee /CSF +{selectedEmail.score} others
                                    </div>
                                    <div className={styles.time}>
                                        {convertSecondsToDate(selectedEmail.time)}
                                    </div>
                                </div>

                                <div className={styles.body_text}>
                                    {parse(selectedEmail.body)}
                                </div>

                                <div className={styles.bottom_actions}>
                                    <Button
                                        className={styles.action}>
                                        <Image 
                                            src={'./media/content/reply.png'}
                                            className={styles.img}/>
                                        <span className={styles.text}>Reply</span>
                                    </Button>
                                    <Button
                                        className={styles.action}>
                                        <Image 
                                            src={'./media/content/reply_all.png'}
                                            className={styles.img}/>
                                        <span className={styles.text}>Reply all</span>
                                    </Button>
                                    <Button
                                        className={styles.action}>
                                        <Image 
                                            src={'./media/content/forward.png'}
                                            className={styles.img}/>
                                        <span className={styles.text}>Forward</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                :

                <div className={styles.unselected_container}>
                    <div className={styles.center_container}>
                        <span className={styles.text_bold}>Select an item to read</span>
                        <span className={styles.text}>Nothing is selected</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Content;