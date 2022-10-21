import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './EmailHeader.module.css';

const EmailHeader = props => {



    return (
        <div className={styles.header}>
            <div className={styles.tabs}>
                <div className={styles.tab}>
                    <span className={styles.text}>Home</span>
                </div>
                <div className={styles.tab}>
                    <span className={styles.text}>View</span>
                </div>
            </div>
            <div className={styles.ribbon_container}>
                <div className={styles.ribbon}>
                    
                </div>
                <div className={styles.dropdown}>
                    <Image 
                        src={`./media/ribbon/dropdown.png`}
                        className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default EmailHeader;