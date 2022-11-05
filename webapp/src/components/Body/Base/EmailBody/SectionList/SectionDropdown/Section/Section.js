import { useState, useEffect, useContext } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Section.module.css';

import GlobalContext from '../../../../../../../context/GlobalContext';

const Section = props => {

    const { subreddit, setSubreddit } = useContext(GlobalContext);

    const { subreddit: subredditName, title, imgName, unreadNum, focused, numHighlighted, inboxLoading, setInboxLoading, abortInboxFetch } = props;

    const handleClick = e => {
        if(inboxLoading || !subredditName) return;
        console.log(subredditName, inboxLoading, !subredditName, inboxLoading || !subredditName);
        abortInboxFetch();
        setSubreddit(subredditName);
        setInboxLoading(true);
    }

    return (
        <div 
            className={`${styles.main} ${focused ? styles.focused : ''}`} 
            onClick={handleClick}>
            <div className={styles.img_container}>
                <Image 
                    src={`./media/sections/${imgName || 'folder'}.png`}
                    className={styles.img}/>
            </div>
            <div className={styles.text_container}>
                <span className={`${styles.title}`}>{title}</span>
                { unreadNum && <span className={`${styles.unread_num} ${numHighlighted ? styles.highlighted : ''}`}>{unreadNum}</span> }
            </div>
        </div>
    )
}

export default Section;