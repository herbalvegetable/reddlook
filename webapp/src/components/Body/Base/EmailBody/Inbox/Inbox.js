import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Inbox.module.css';

import Email from './Email/Email';

const Inbox = props => {

    const { selectedEmailIndex, setSelectedEmailIndex, setSelectedEmailId } = props;

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const subredditName = 'sgexams';

        fetch(`http://localhost:5000/${subredditName}/hot`)
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    setEmails(data);
                })
                .catch(err => console.log(err)))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log(selectedEmailIndex);
        if(selectedEmailIndex != null){
            console.log(emails[selectedEmailIndex].id || null);
            setSelectedEmailId(emails[selectedEmailIndex].id || null);
        }
    }, [selectedEmailIndex]);

    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className={styles.checkmark_img_container}>
                    <Image 
                        src={'./media/inbox/checkmark.png'}
                        className={styles.img}/>
                </div>
                <div className={`${styles.section} ${styles.focused}`}>
                    <span className={styles.text}>Focused</span>
                </div>
                <div className={styles.section}>
                    <span className={styles.text}>Other</span>
                </div>
                
                <div className={styles.filter_container}>
                    <div className={styles.img_container}>
                        <Image 
                            src={'./media/inbox/filter.png'}
                            className={styles.img}/>
                    </div>
                    <span className={styles.text}>Filter</span>
                </div>
            </div>

            <div className={styles.email_list}>
            {
                emails.map((email, i) => {
                    return <Email 
                        key={i.toString()}
                        index={i}
                        {...email}
                        selectedEmailIndex={selectedEmailIndex}
                        setSelectedEmailIndex={setSelectedEmailIndex}/>
                })
            }
            </div>
        </div>
    )
}

export default Inbox;