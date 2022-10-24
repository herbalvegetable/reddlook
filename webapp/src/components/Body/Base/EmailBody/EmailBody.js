import { useState, useEffect } from 'react';

import styles from './EmailBody.module.css';

import Content from './Content/Content';
import Inbox from './Inbox/Inbox';
import SectionList from './SectionList/SectionList';

const EmailBody = props => {

    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState({});

    useEffect(() => {
        console.log(selectedEmail);
        console.log(Object.keys(selectedEmail).length > 0);
    }, [selectedEmail]);

    return (
        <div className={styles.main}>
            <SectionList />
            <Inbox  
                selectedEmailIndex={selectedEmailIndex}
                setSelectedEmailIndex={setSelectedEmailIndex}
                setSelectedEmail={setSelectedEmail}/>
            <Content
                selectedEmailIndex={selectedEmailIndex}
                selectedEmail={selectedEmail}/>
        </div>
    )
}

export default EmailBody;