import { useState, useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';

import styles from './AppLauncher.module.css';

const AppLauncher = props => {



    return (
        <div className={styles.app_launcher}>
            <Image 
                src={'./media/app-launcher.png'}
                className={styles.img}/>
        </div>
    )
}

export default AppLauncher;