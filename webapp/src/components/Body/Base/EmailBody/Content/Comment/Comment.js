import {useState, useEffect} from 'react';
import randomColor from 'randomcolor';
import parse from 'html-react-parser';

import styles from './Comment.module.css';

const Comment = props => {

    const { id, author, body, score, time, replies, topmost } = props;

    return (
        <div className={`${styles.main} ${topmost ? styles.topmost : ''}`}>
            <span className={styles.author}>{author}</span>
            <div className={styles.body_text}>{parse(body)}</div>
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
                        />
                })
            }
        </div>
    )
}

export default Comment;