import { useState, useEffect, useContext, useRef } from 'react';
import { Image, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import randomColor from "randomcolor";

import styles from './Content.module.css';

import GlobalContext from '../../../../../context/GlobalContext';
import { convertSecondsToDate } from '../../../../../hooks/useConvertSecondsToDate';
import Comment from './Comment/Comment';
import SmallImage from './SmallImage/SmallImage';

const Content = props => {

    const { subreddit, profileIconColour } = useContext(GlobalContext);

    const { selectedEmailId } = props;

    const bodyEl = useRef(null);

    // const { author, title, body, unread } = selectedEmail;

    const [selectedEmail, setSelectedEmail] = useState({});
    const [comments, setComments] = useState([]);
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        if(selectedEmailId && subreddit){
            fetch(`http://localhost:5000/${subreddit}/post/${selectedEmailId}`)
                .then(res => res.json()
                    .then(data => {
                        setSelectedEmail(data);
                        setComments(data.comments);
                        setImgList(data.imgList);

                        // console.log(bodyEl.current);
                        bodyEl?.current?.scrollTo({
                            top: 0,
                            // behavior: 'smooth',
                        });
                        // console.log(bodyEl.current.scrollY);
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
                    <div className={styles.body_container} ref={bodyEl}>
                        <div className={styles.body}>

                            <div className={styles.profile_icon_container}>
                                <div 
                                    className={styles.profile_icon}
                                    style={{backgroundColor: profileIconColour || 'gray'}}>
                                    <span className={styles.text}>{selectedEmail.author.slice(0, 2).toUpperCase()}</span>
                                </div>
                            </div>

                            <div className={styles.content}>

                                <div className={styles.first_row}>
                                    <span className={styles.author}>{selectedEmail.author} {"<no-reply@reddlook.com>"}</span>
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
                                        Cc: Yam Lao Tay /CSF; Calvin Lee /CSF; <span className={styles.score}>+{selectedEmail.score} others</span>
                                    </div>
                                    <div className={styles.time}>
                                        {convertSecondsToDate(selectedEmail.time)}
                                    </div>
                                </div>

                                {
                                    selectedEmail.body ?

                                    <div className={styles.body_text}>
                                        {parse(selectedEmail.body)}
                                    </div>

                                    :

                                    null
                                }

                                {

                                    (imgList && imgList.length > 0) ?

                                    <div className={styles.img_list}>
                                    {
                                        imgList.map((imgData, i) => {
                                            return <SmallImage 
                                                key={i.toString()}
                                                {...imgData}/>
                                        })
                                    }
                                    </div>

                                    :

                                    selectedEmail.imgUrl ?

                                    <div className={styles.img_single}>
                                        <SmallImage 
                                            imgSrc={selectedEmail.imgUrl}/>
                                    </div>

                                    : null
                                }

                                {
                                    selectedEmail.url ?

                                    <div className={styles.url_text}>
                                        <a 
                                            className={styles.hyperlink}
                                            href={selectedEmail.url}>
                                            {selectedEmail.url}
                                        </a>
                                    </div>

                                    :

                                    null
                                }
                                
                                <span className={styles.comment_num}>{selectedEmail.commentsNum} replies</span>
                                <div className={styles.comment_list}>
                                {
                                    comments.map((comment, i) => {
                                        return <Comment 
                                            key={i.toString()}
                                            id={comment.id}
                                            author={comment.author}
                                            body={comment.body_html}
                                            score={comment.score}
                                            time={comment.created_utc}
                                            replies={comment.replies}
                                            op={selectedEmail.author}
                                            topmost
                                            />
                                    })
                                }
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