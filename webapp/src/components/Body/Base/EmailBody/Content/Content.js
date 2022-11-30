import { useState, useEffect, useContext, useRef } from 'react';
import { Image, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import randomColor from "randomcolor";
import {
    Emoji20Regular,
    ArrowReply20Regular,
    ArrowReplyAll20Regular,
    ArrowForward20Regular,
    MoreHorizontal20Regular,
} from '@fluentui/react-icons';

import styles from './Content.module.css';

import GlobalContext from '../../../../../context/GlobalContext';
import { convertSecondsToDate } from '../../../../../hooks/useConvertSecondsToDate';
import Comment from './Comment/Comment';
import SmallImage from './SmallImage/SmallImage';
import SmallVideo from './SmallVideo/SmallVideo';

const Content = props => {

    const { subreddit, profileIconColour } = useContext(GlobalContext);

    const { selectedEmailId, controller, loading, setLoading } = props;
    const { signal } = controller;

    const headerEl = useRef(null);
    const bodyEl = useRef(null);

    const [selectedEmail, setSelectedEmail] = useState({});
    const [imgList, setImgList] = useState([]);
    const [expandedImgSrc, setExpandedImgSrc] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [randSubjectNumber, setRandSubjectNumber] = useState(`000${Math.floor(Math.random() * 10000)}`.slice(-4));
    const mainContentRef = useRef(null);

    const [comments, setComments] = useState([]);
    const [currCommentIndex, setCurrCommentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const commentListRef = useRef(null);

    useEffect(() => {
        if(selectedEmailId){
            fetch(`http://${window.location.hostname}:5000/${subreddit}/post/${selectedEmailId}`, {signal})
                .then(res => res.json()
                    .then(data => {
                        setSelectedEmail(data);
                        setImgList(data.imgList);
                        bodyEl?.current?.scrollTo({
                            top: 0,
                            // behavior: 'smooth',
                        });

                        setExpandedImgSrc(null);
                        console.log(data.videoUrl);
                        setVideoUrl(data.videoUrl);
                        setLoading(false);

                        setCurrCommentIndex(0);

                        setNameStr(getRandomNames(2));
                    })
                    .catch(err => console.log(err))
                )
                .catch(err => console.log(`Error: ${err}`));
        }
    }, [selectedEmailId]);

    useEffect(() => {
        console.log(videoUrl);
    }, [videoUrl]);

    useEffect(() => {
        if(selectedEmailId){
            fetch(`http://${window.location.hostname}:5000/${subreddit}/comments/${selectedEmailId}`, {signal})
                .then(res => res.json()
                    .then(data => {
                        setComments(data);
                    })
                    .catch(err => console.log(err))
                )
                .catch(err => console.log(err));
        }
    }, [selectedEmailId]);

    const [headerHeight, setHeaderHeight] = useState(50);
    // useEffect(() => {
    //     setHeaderHeight(Math.max(Math.floor(headerEl?.current?.getBoundingClientRect().height - 20), 50));
    // }, [headerEl]);
    // useEffect(() => {
    //     console.log(`Headerheight: ${headerHeight}`);
    // }, [headerHeight]);

    const getCommentYPos = index => {
        return commentListRef.current.children[index]?.offsetTop - commentListRef.current.offsetTop/2 + mainContentRef.current.getBoundingClientRect().height/2;
    }
    const updateCurrCommentIndex = () => {
        if(!commentListRef.current) return;
        const commentInfoList = [...commentListRef.current.children].map((child, i) => {
                return {pos: getCommentYPos(i) - headerHeight - 10, index: i};
        });
        const closestCommentIndex = commentInfoList.filter(comment => comment.pos > bodyEl.current.scrollTop).sort((a, b) => a.pos - b.pos)[0]?.index || 0;
        // console.log(closestCommentIndex);
        // console.log(bodyEl.current.scrollTop, commentInfoList[closestCommentIndex].pos);

        setCurrCommentIndex(closestCommentIndex);
    }

    const getRandomNames = num => {
        const names = ['Yam Lao Tay', 'Calvin Lee', 'Johnathan Tan', 'Rui Meng', 'Sunny Yeo', 'Timothy Hang', 'Caleb Chee', 'Harvey Tao',];

        let randNums = [];

        for (let i = 0; i < num; i++) {
            let rand, loop = true;
            while (loop){
                rand = Math.floor(Math.random() * names.length);
                loop = randNums.includes(rand);
                console.log(loop);
            }
            randNums.push(rand);
        }


        return `${[...randNums.map(n => names[n])].join(' /RED; ')} /RED;`;
    }
    const [nameStr, setNameStr] = useState('');

    return (
        
        <div className={styles.main}>
            {
                Object.keys(selectedEmail).length > 0 ?
                <>
                    <div 
                        className={styles.header} 
                        ref={headerEl}>
                        <span className={styles.title}>
                            (REDForum) Comments: {selectedEmail.title} - RED:#{randSubjectNumber}{loading && <span className={styles.loading}>  ...Loading</span>}
                        </span>
                        <div 
                            className={styles.zoom_options}
                            onClick={e => {
                                if(!commentListRef.current) return;
                                console.log(headerEl.current.getBoundingClientRect().height);
                                bodyEl?.current?.scrollTo({
                                    top: getCommentYPos(currCommentIndex) - headerHeight,
                                    behavior: 'smooth',
                                });
                            }}>
                            <Image 
                                src={'/media/content/zoom_in.png'}
                                className={styles.zoom_in_img}/>
                            <Image
                                src={'/media/content/dropdown.png'}
                                className={styles.dropdown_img}/>
                        </div>
                    </div>
                    <div 
                        className={styles.body_container} 
                        ref={bodyEl}
                        onScroll={e => {
                            updateCurrCommentIndex();
                        }}>
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
                                    <span className={styles.author}>{selectedEmail.author} /RED - No Reply {`<no-reply.${selectedEmail.subreddit}@reddlook.com>`}</span>
                                    <div className={styles.actions}>
                                        <div className={styles.action}>
                                            <Emoji20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        </div>
                                        <div className={styles.action}>
                                            <ArrowReply20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        </div>
                                        <div className={styles.action}>
                                            <ArrowReplyAll20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        </div>
                                        <div className={styles.action}>
                                            <ArrowForward20Regular
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        </div>
                                        <div className={styles.action}>
                                            <MoreHorizontal20Regular
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.second_row}>
                                    <div className={styles.likes}>
                                        Cc: {nameStr} <span className={styles.score}>+{selectedEmail.score} others</span>
                                    </div>
                                    <div className={styles.time}>
                                        {convertSecondsToDate(selectedEmail.time)}
                                    </div>
                                </div>
                                <div className={styles.main_content} ref={mainContentRef}>
                                {
                                    selectedEmail.body ?

                                    <div className={styles.body_text}>
                                        {parse(selectedEmail.body)}
                                    </div>

                                    :

                                    null
                                }

                                {
                                    expandedImgSrc &&
                                    <div 
                                        className={styles.expanded_img_container}
                                        onClick={e => setExpandedImgSrc(null)}>
                                        <Image 
                                            src={expandedImgSrc}
                                            className={styles.img}/>
                                    </div>
                                }
                                {

                                    (imgList && imgList.length > 0) ?

                                    <div className={styles.img_list}>
                                    {
                                        imgList.map((imgData, i) => {
                                            return <SmallImage 
                                                key={i.toString()}
                                                {...imgData}
                                                setExpandedImgSrc={setExpandedImgSrc}/>
                                        })
                                    }
                                    </div>

                                    :

                                    selectedEmail.videoUrl ?
                                    <div
                                        // key={Math.floor(Math.random() * 100).toString()}
                                        key={videoUrl}
                                        className={styles.small_video_container}>
                                        <SmallVideo 
                                            videoUrl={videoUrl}/>
                                    </div>

                                    :

                                    selectedEmail.imgUrl ?

                                    <div className={styles.img_single}>
                                        <SmallImage 
                                            imgSrc={selectedEmail.imgUrl}
                                            setExpandedImgSrc={setExpandedImgSrc}/>
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
                                </div>
                                <span className={styles.comment_num}>{selectedEmail.commentsNum} replies</span>
                                <div className={styles.comment_list} ref={commentListRef}>
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
                                            depth={1}
                                            topmost
                                            />
                                    })
                                }
                                </div>

                                <div className={styles.bottom_actions}>
                                    <Button
                                        className={styles.action}>
                                        <ArrowReply20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        <span className={styles.text}>Reply</span>
                                    </Button>
                                    <Button
                                        className={styles.action}>
                                        <ArrowReplyAll20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        <span className={styles.text}>Reply all</span>
                                    </Button>
                                    <Button
                                        className={styles.action}>
                                        <ArrowForward20Regular 
                                                className={styles.img}
                                                primaryFill={'#0f6cbd'}/>
                                        <span className={styles.text}>Forward</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                :

                <div className={styles.unselected_container}>
                    <Image 
                        src={'https://res.cdn.office.net/owamail/20221104009.06/scripts/../resources/images/illustration_mail-hash-c4bc6831.svg'}
                        className={styles.img}/>
                    <span className={styles.text_bold}>Select an item to read</span>
                    <span className={styles.text}>Nothing is selected</span>
                </div>
            }
        </div>
    )
}

export default Content;