import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './SectionDropdown.module.css';

import Section from './Section/Section';
import Option from './Option/Option';

const SectionDropdown = props => {

    const { title, expanded, sections: sects, options: opts } = props;

    const [isExpanded, setIsExpanded] = useState(expanded);
    const [sections, setSections] = useState(sects || []);
    const [options, setOptions] = useState(opts || []);

    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.img_container}>
                    <Image
                        src={`./media/sections/dropdown.png`}
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
                                {...section}/>
                        })
                    }
                    {
                        options.map((option, i) => {
                            return <Option
                                key={i.toString()}
                                text={option}/>
                        })
                    }
                </>
            }
        </>
    )
}

export default SectionDropdown;