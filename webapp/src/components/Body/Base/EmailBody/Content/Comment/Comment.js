import {useState, useEffect, useRef} from 'react';
import randomColor from 'randomcolor';
import parse from 'html-react-parser';

import styles from './Comment.module.css';

const Comment = props => {

    const { id, author, body, score, time, replies, topmost, bottommost, op, depth } = props;

    // console.log(author, op, author == op);

    // const [bodyHtml, setBodyHtml] = useState(parse(body));

    const bodyTextRef = useRef(null);

    const handleClickSpoiler = e => {
        e.currentTarget.classList.toggle(styles.spoiler);
    }

    useEffect(() => {
        [...bodyTextRef.current.children[0].children].map(p => {
            [...p.children].map(span => {
                if(span.getAttribute('class') != 'md-spoiler-text') return;
                span.setAttribute('class', styles.spoiler);
                span.onclick = handleClickSpoiler;
            });
        });
    }, [body]);

    return (
        <div 
            className={`${styles.main} ${topmost ? styles.topmost : ''} ${bottommost ? styles.bottommost : ''}`}
            style={{
                "--depth": depth,
            }}>
            <span className={`${styles.author} ${author == op ? styles.op : ''}`}>{author} ({score})</span>
            <div className={styles.body_text} ref={bodyTextRef}>{parse(body)}</div>
            {
                replies.length > 0 && replies.map((comment, i) => {
                    return <Comment 
                        key={i.toString()}
                        id={comment.id}
                        author={comment.author}
                        body={comment.body_html}
                        score={comment.score}
                        time={comment.created_utc}
                        replies={comment.replies}
                        bottommost={i == replies.length-1}
                        op={op}
                        depth={depth+1}
                        />
                })
            }
        </div>
    )
}

export default Comment;