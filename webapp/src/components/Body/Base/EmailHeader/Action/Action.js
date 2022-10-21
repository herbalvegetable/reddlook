import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Action.module.css';

const Action = props => {

    const { imgName, title } = props;

    return (
        <div className={styles.action}>
            <Image 
                src={`./media/ribbon/${imgName}.png`}
                className={styles.img}/>
        </div>
    )
}

export default Action;