import { useState, useEffect } from 'react';

import styles from './Divider.module.css';

const Divider = props => {

    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
        </div>
    )
}

export default Divider;