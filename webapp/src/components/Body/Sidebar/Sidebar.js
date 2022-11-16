import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Sidebar.module.css';

const Sidebar = props => {

    const [sidebarActions, setSidebarActions] = useState([
        'Email',
        'Calendar',
        'People',
        'Files',
        'To Do',
        'Go to Word',
        'Go to Excel',
        'Go to Powerpoint',
        'Go to Yammer',
        'Bookings',
        'Go to Onedrive for Business',
        'More apps',
    ]);

    return (
        <div className={styles.sidebar}>
            {
                sidebarActions.map((action, i) => {
                    return <div 
                        key={i.toString()} 
                        className={styles.action}
                        title={action}>
                        <Image 
                            src={`/media/sidebar/${i+1}.png`}
                            className={styles.img}/>
                    </div>
                })
            }
        </div>
    )
}

export default Sidebar;