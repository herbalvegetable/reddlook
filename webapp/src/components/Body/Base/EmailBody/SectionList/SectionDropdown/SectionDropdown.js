import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './SectionDropdown.module.css';

import Section from './Section/Section';
import Option from './Option/Option';

const SectionDropdown = props => {

    const { title, expanded, sections: sects, options: opts, inboxLoading, setInboxLoading, abortInboxFetch } = props;

    const [isExpanded, setIsExpanded] = useState(expanded);
    const [sections, setSections] = useState(sects || []);
    const [options, setOptions] = useState(opts || []);

    const addSections = subreddits => {
        setSections([...sections, ...subreddits.map((sectionTitle, i) => {
            return {
                title: sectionTitle,
                imgName: '',
                subreddit: sectionTitle,
            }
        })]);
    }

    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.img_container}>
                    <Image
                        src={`/media/sections/dropdown.png`}
                        className={styles.img}/>
                </div>
                <span className={styles.text}>{title}</span>
            </div>
            {
                isExpanded &&
                <>
                    {
                        sections.map((section, i) => {
                            return <Section 
                                key={i.toString()}
                                {...section}
                                inboxLoading={inboxLoading}
                                setInboxLoading={setInboxLoading}
                                abortInboxFetch={abortInboxFetch}/>
                        })
                    }
                    {
                        options.map((option, i) => {
                            return <Option
                                key={i.toString()}
                                text={option}
                                addSections={addSections}/>
                        })
                    }
                </>
            }
        </>
    )
}

export default SectionDropdown;