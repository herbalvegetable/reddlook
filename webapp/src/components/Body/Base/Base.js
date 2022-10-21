import { useState, useEffect } from 'react';

import styles from './Base.module.css';
import EmailHeader from './EmailHeader/EmailHeader';
import EmailBody from './EmailBody/EmailBody';

const Base = props => {



    return (
        <div className={styles.main}>
            <EmailHeader />
            <EmailBody />
        </div>
    )
}

export default Base;