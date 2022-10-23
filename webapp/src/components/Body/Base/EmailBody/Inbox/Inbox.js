import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Inbox.module.css';

import Email from './Email/Email';

const Inbox = props => {

    const [emails, setEmails] = useState([
        {
            author: 'u/Maximum_Afternoon_40',
            title: '[O levels] urgent help for SS',
            body: 'Yep I am failing SS 😭😭 idk every since the start of sec 4, I’ve always failed SS 🥲 despite memorising format for SBQ. I still end up failing cause I “misinterpret” the sources wrongly… any tips on it? Those around me always score quite high for their papers and honestly idek how they are doing it :,) There are so many bloody topics for SRQ so ig that’s the end of me for S',
            unread: false,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        {
            author: 'dabalabibala',
            title: 'how do you memorise?',
            body: 'hey guys, ive been rememorising all the chemistry content and i was curious how you fellers memorise? i usually write out or type out what im reading in order to memorise, what about you? good luck for os!',
            unread: true,
        },
        
    ]);

    useEffect(() => {

    }, []);

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
                        {...email}/>
                })
            }
            </div>
        </div>
    )
}

export default Inbox;