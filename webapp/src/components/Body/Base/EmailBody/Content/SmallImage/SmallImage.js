import {useState, useEffect} from 'react';
import { Image } from 'react-bootstrap';

import styles from './SmallImage.module.css';

const SmallImage = props => {

    const { imgSrc, caption } = props;

    return (
        <div 
            className={styles.main}>
            <Image
                src={imgSrc}
                title={caption || ''}
                className={styles.img}/>
        </div>
    )
}

export default SmallImage;