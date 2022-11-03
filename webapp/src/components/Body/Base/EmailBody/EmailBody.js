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
    const abortFetch = () => {
        console.log('Aborting fetch...');
        controller.abort();
    }

    const [inboxLoading, setInboxLoading] = useState(false);
    const inboxLoadingController = new AbortController();
    const abortInboxFetch = () => {
        console.log('Aborting Inbox fetch...');
        inboxLoadingController.abort();
    }

    useEffect(() => {
        console.log(selectedEmailId);
    }, [selectedEmailId]);


    return (
        <div className={styles.main}>
            <SectionList 
                abortInboxFetch={abortInboxFetch}
                inboxLoading={inboxLoading}
                setInboxLoading={setInboxLoading}/>
            <Inbox  
                selectedEmailIndex={selectedEmailIndex}
                setSelectedEmailIndex={setSelectedEmailIndex}
                setSelectedEmailId={setSelectedEmailId}

                abortFetch={abortFetch}
                setLoading={setLoading}

                inboxLoading={inboxLoading}
                setInboxLoading={setInboxLoading}
                inboxLoadingController={inboxLoadingController}/>
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