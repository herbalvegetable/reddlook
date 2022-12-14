import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

import styles from './Option.module.css';

const Option = props => {

    const { text, addSections } = props;

    const [focused, setFocused] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const [isHoveringSaveBtn, setIsHoveringSaveBtn] = useState(false);

    const handleAddSection = () => {
        if(inputVal == '') return;
        const subreddits = inputVal.trim().replace(/ /g, '').split(',');
        addSections(subreddits);
        setFocused(false);
        setInputVal('');
    }

    return (
        <>
        {
            focused ? 

            <div className={styles.main_focused}>
                <input 
                    type='text'
                    placeholder=''
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    className={styles.input}
                    onBlur={() => {
                        if(isHoveringSaveBtn) return;
                        setFocused(false)
                    }}
                    onKeyDown={e => {
                        switch(e.key){
                            case 'Escape':
                                setFocused(false);
                            break;
                            case 'Enter':
                                handleAddSection();
                            break;
                        }
                    }}
                    autoFocus/>
                <Button 
                    className={styles.save_btn}
                    disabled={inputVal == ''}
                    onClick={() => handleAddSection()}
                    onMouseEnter={() => setIsHoveringSaveBtn(true)}
                    onMouseLeave={() => setIsHoveringSaveBtn(false)}>
                    Save
                </Button>
            </div>

            :

            <div 
                className={styles.main} 
                onClick={() => {
                    setFocused(true);
                    setInputVal('');
                }}>
                <span className={styles.text}>{text}</span>
            </div>
        }
        </>
    )
}

export default Option;