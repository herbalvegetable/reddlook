import { useState, useEffect } from 'react';

import styles from './EmailBody.module.css';

import Content from './Content/Content';
import Inbox from './Inbox/Inbox';
import SectionList from './SectionList/SectionList';

const EmailBody = props => {

    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [selectedEmailId, setSelectedEmailId] = useState(null);

    useEffect(() => {
        console.log(selectedEmailId);
    }, [selectedEmailId]);

    return (
        <div className={styles.main}>
            <SectionList />
            <Inbox  
                selectedEmailIndex={selectedEmailIndex}
                setSelectedEmailIndex={setSelectedEmailIndex}
                setSelectedEmailId={setSelectedEmailId}/>
            <Content
                selectedEmailIndex={selectedEmailIndex}
                selectedEmailId={selectedEmailId}/>
        </div>
    )
}

export default EmailBody;