import { useState, useEffect } from 'react';

import styles from './EmailBody.module.css';

import Content from './Content/Content';
import Inbox from './Inbox/Inbox';
import SectionList from './SectionList/SectionList';

const EmailBody = props => {

    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState(null);

    useEffect(() => {
        console.log(selectedEmail);
    }, [selectedEmail]);

    return (
        <div className={styles.main}>
            <SectionList />
            <Inbox  
                selectedEmailIndex={selectedEmailIndex}
                setSelectedEmailIndex={setSelectedEmailIndex}
                setSelectedEmail={setSelectedEmail}/>
            <Content 
                selectedEmail={selectedEmail}/>
        </div>
    )
}

export default EmailBody;