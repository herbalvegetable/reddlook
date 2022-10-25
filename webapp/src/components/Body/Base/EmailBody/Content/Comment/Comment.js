import {useState, useEffect} from 'react';
import randomColor from 'randomcolor';
import parse from 'html-react-parser';

import styles from './Comment.module.css';

const Comment = props => {

    const { id, author, body, score, time, replies } = props;

    return (
        <div className={styles.main}>
            <div className={styles.body_text}>{parse(body)}</div>
        </div>
    )
}

export default Comment;