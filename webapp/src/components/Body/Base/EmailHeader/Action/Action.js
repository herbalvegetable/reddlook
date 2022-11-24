import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Action.module.css';

const Action = props => {

    const { imgName, title, expanded, IconEl, iconColor } = props;

    return (
        <div className={`${styles.action} ${expanded ? styles.expanded : ''}`}>
            {
                IconEl ?
                    <IconEl className={styles.img} primaryFill={iconColor}/>
                :

                <Image 
                    src={`/media/ribbon/${imgName}.png`}
                    className={styles.img}/>
            }
            {
                expanded && <span className={styles.title}>{title}</span>
            }
        </div>
    )
}

export default Action;