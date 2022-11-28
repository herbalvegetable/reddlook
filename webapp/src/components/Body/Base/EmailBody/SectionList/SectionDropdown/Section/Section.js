import { useState, useEffect, useContext } from 'react';
import { Image } from 'react-bootstrap';
import {
    Folder20Regular,
} from '@fluentui/react-icons';

import styles from './Section.module.css';

import GlobalContext from '../../../../../../../context/GlobalContext';

const Section = props => {

    const { subreddit, setSubreddit } = useContext(GlobalContext);

    const { subreddit: subredditName, title, imgName, Icon, unreadNum, focused, numHighlighted, inboxLoading, setInboxLoading, abortInboxFetch } = props;

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
                {
                    Icon ?

                    <Icon 
                        primaryFill={'#808080'}
                        className={styles.img}/>

                    : imgName ?

                    <Image 
                        src={`/media/sections/${imgName || 'folder'}.png`}
                        className={styles.img}/>

                    :

                    <Folder20Regular
                        primaryFill={'#808080'}
                        className={styles.img}/>
                }
            </div>
            <div className={styles.text_container}>
                <span className={`${styles.title}`}>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
                { unreadNum && <span className={`${styles.unread_num} ${numHighlighted ? styles.highlighted : ''}`}>{unreadNum}</span> }
            </div>
        </div>
    )
}

export default Section;