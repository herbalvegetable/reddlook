import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

import styles from './Option.module.css';

const Option = props => {

    const { text, addSection } = props;

    const [focused, setFocused] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const [isHoveringSaveBtn, setIsHoveringSaveBtn] = useState(false);

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
                        if(e.key == 'Escape'){
                            setFocused(false);
                        }
                    }}
                    autoFocus/>
                <Button 
                    className={styles.save_btn}
                    disabled={inputVal == ''}
                    onClick={() => {
                        if(inputVal == '') return;
                        addSection(inputVal);
                        setFocused(false);
                        setInputVal('');
                    }}
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