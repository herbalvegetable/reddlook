import { useState, useEffect } from 'react';

import styles from './EmailBody.module.css';

import Content from './Content/Content';
import Inbox from './Inbox/Inbox';
import SectionList from './SectionList/SectionList';

const EmailBody = props => {

    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [selectedEmailId, setSelectedEmailId] = useState(null);

    const [loading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
        console.log(selectedEmailId);
    }, [selectedEmailId]);

    const abortFetch = () => {
        console.log('Aborting fetch...');
        controller.abort();
    }

    return (
        <div className={styles.main}>
            <SectionList />
            <Inbox  
                selectedEmailIndex={selectedEmailIndex}
                setSelectedEmailIndex={setSelectedEmailIndex}
                setSelectedEmailId={setSelectedEmailId}
                abortFetch={abortFetch}
                setLoading={setLoading}/>
            <Content
                selectedEmailIndex={selectedEmailIndex}
                selectedEmailId={selectedEmailId}
                controller={controller}
                loading={loading}
                setLoading={setLoading}/>
        </div>
    )
}

export default EmailBody;