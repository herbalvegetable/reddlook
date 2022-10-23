import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

import styles from './Option.module.css';

const Option = props => {

    const { text } = props;

    const [focused, setFocused] = useState(false);
    const [inputVal, setInputVal] = useState('');

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
                    onBlur={() => setFocused(false)}
                    autoFocus/>
                <Button 
                    className={styles.save_btn}
                    disabled={inputVal == ''}>
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