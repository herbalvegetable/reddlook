import { useState, useEffect } from 'react';

import styles from './Title.module.css';

const Title = props => {



    return (
        <div className={styles.main}>
            <span className={styles.title}>Outlook</span>
        </div>
    )
}

export default Title;