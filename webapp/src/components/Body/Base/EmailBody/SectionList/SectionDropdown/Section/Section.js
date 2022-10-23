import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Section.module.css';

const Section = props => {

    const { title, imgName, unreadNum } = props;

    return (
        <div className={styles.main}>
            <div className={styles.img_container}>
                <Image 
                    src={`./media/sections/${imgName || 'folder'}.png`}
                    className={styles.img}/>
            </div>
            <div className={styles.text_container}>
                <span className={styles.title}>{title}</span>
                { unreadNum && <span className={styles.unread_num}>{unreadNum}</span> }
            </div>
        </div>
    )
}

export default Section;