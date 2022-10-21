import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './ActionWithDropdown.module.css';

const ActionWithDropdown = props => {

    const { imgName, title, expanded } = props;

    return (
        <div className={styles.container}>
            <div className={`${styles.action} ${expanded ? styles.expanded : ''}`}>
                <Image 
                    src={`./media/ribbon/${imgName}.png`}
                    className={styles.img}/>
                {
                    expanded && <span className={styles.title}>{title}</span>
                }
            </div>
            <div className={styles.dropdown}>
                <Image 
                    src={`./media/ribbon/dropdown.png`}
                    className={styles.img}/>
            </div>
        </div>
    )
}

export default ActionWithDropdown;