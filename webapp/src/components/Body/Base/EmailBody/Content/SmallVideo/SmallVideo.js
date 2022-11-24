import { useState, useEffect, useRef } from 'react';
import { Image } from 'react-bootstrap';

import styles from './SmallVideo.module.css';

const SmallVideo = props => {

    const { videoUrl } = props;

    const videoEl = useRef(null);

    return (
        <div
            className={styles.main}>
            <video
                className={styles.video} 
                controls
                autoPlay
                ref={videoEl}>
                <source src={videoUrl} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <Image 
                src='/media/content/picture_in_picture.png'
                className={styles.img}
                onClick={e => {
                    console.log('picture in picture');
                    
                    if(document.pictureInPictureElement){
                        document.exitPictureInPicture();
                    }
                    else if(document.pictureInPictureEnabled){
                        videoEl.current.requestPictureInPicture();
                    }
                }}/>
        </div>
    )
}

export default SmallVideo;