import { useState, useEffect } from 'react';

import styles from './EmailBody.module.css';

import Content from './Content/Content';
import Inbox from './Inbox/Inbox';
import SectionList from './SectionList/SectionList';

const EmailBody = props => {



    return (
        <div className={styles.main}>
            <SectionList />
            <Inbox />
            <Content />
        </div>
    )
}

export default EmailBody;