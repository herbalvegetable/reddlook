import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Option.module.css';

const Option = props => {

    const { text } = props;

    return (
        <div className={styles.main}>
            <span className={styles.text}>{text}</span>
        </div>
    )
}

export default Option;