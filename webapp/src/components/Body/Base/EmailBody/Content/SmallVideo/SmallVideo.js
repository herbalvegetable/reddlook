import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './SmallVideo.module.css';

const SmallVideo = props => {

    const { videoUrl } = props;

    return (
        <div
            className={styles.main}>
            <video
                className={styles.video} 
                controls
                autoPlay>
                <source src={videoUrl} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default SmallVideo;