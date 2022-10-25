import { useState, useEffect } from 'react';
import { Image, Button } from 'react-bootstrap';

import styles from './Content.module.css';

const Content = props => {

    const { selectedEmailId } = props;

    // const { author, title, body, unread } = selectedEmail;

    const [selectedEmail, setSelectedEmail] = useState({});

    useEffect(() => {
        const subredditName = 'sgexams';

        if(selectedEmailId){
            fetch(`http://localhost:5000/${subredditName}/post/${selectedEmailId}`)
                .then(res => res.json()
                    .then(data => {
                        console.log(data);
                        setSelectedEmail(data);
                    })
                    .catch(err => console.log(err))
                )
                .catch(err => console.log(err));
        }
    }, [selectedEmailId]);

    return (
        
        <div className={styles.main}>
            {
                Object.keys(selectedEmail).length > 0 ?
                <>
                    <div className={styles.header}>
                        <span className={styles.title}>{selectedEmail.title}</span>
                        <div className={styles.zoom_options}>
                            <Image 
                                src={'./media/content/zoom_in.png'}
                                className={styles.zoom_in_img}/>
                            <Image
                                src={'./media/content/dropdown.png'}
                                className={styles.dropdown_img}/>
                        </div>
                    </div>
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
                                    Cc: Ben Aw Yong /CSF; Ben Aw Yong /CSF; Ben Aw Yong /CSF; +4036 others
                                </div>
                                <div className={styles.time}>
                                    Sun 23/10/2022 15:11
                                </div>
                            </div>

                            <div className={styles.body_text}>
                                {selectedEmail.body}
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