import { useState, useEffect, useContext } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Section.module.css';

import GlobalContext from '../../../../../../../context/GlobalContext';

const Section = props => {

    const { subreddit, setSubreddit } = useContext(GlobalContext);

    const { subreddit: subreddit_name, title, imgName, unreadNum, highlighted } = props;

    const handleClick = e => {
        setSubreddit(subreddit_name);
    }

    return (
        <div 
            className={styles.main} 
            onClick={handleClick}>
            <div className={styles.img_container}>
                <Image 
                    src={`./media/sections/${imgName || 'folder'}.png`}
                    className={styles.img}/>
            </div>
            <div className={styles.text_container}>
                <span className={styles.title}>{title}</span>
                { unreadNum && <span className={`${styles.unread_num} ${highlighted ? styles.highlighted : ''}`}>{unreadNum}</span> }
            </div>
        </div>
    )
}

export default Section;