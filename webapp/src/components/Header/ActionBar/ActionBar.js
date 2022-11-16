import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './ActionBar.module.css';

import { actionList } from './ActionData';

const ActionBar = props => {

    const [actions, setActions] = useState(actionList);

    return (
        <div className={styles.main}>
            {
                actionList.map((action, i) => {
                    return <div key={i.toString()} className={styles.action}>
                        <Image 
                            src={`/media/controls/action_${i+1}.png`}
                            className={styles.img}/>
                    </div>
                })
            }
            <div className={`${styles.action} ${styles.profile}`}>
                <div className={styles.circle}>
                    <span className={styles.letter}>B</span>
                </div>
            </div>
        </div>
    )
}

export default ActionBar;