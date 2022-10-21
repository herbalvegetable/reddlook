import { useState, useEffect } from 'react';
import Base from './Base/Base';

import styles from './Body.module.css';
import Sidebar from './Sidebar/Sidebar';

const Body = props => {



    return (
        <div className={styles.main}>
            <Sidebar />
            <Base />
        </div>
    )
}

export default Body;