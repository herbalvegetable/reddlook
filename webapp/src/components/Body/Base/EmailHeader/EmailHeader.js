import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import styles from './EmailHeader.module.css';

import Action from './Action/Action';
import ActionWithDropdown from './ActionWithDropdown/ActionWithDropdown';
import Divider from './Divider/Divider';

const EmailHeader = props => {



    return (
        <div className={styles.header}>
            <div className={styles.tabs}>
            {
                ['Home', 'View'].map((text, i) => {
                    return <div 
                        key={i.toString()}
                        className={styles.tab_container}>
                        <div className={styles.tab}>
                            <span className={styles.text}>{text}</span>
                        </div>
                    </div>
                })
            }
            </div>
            <div className={styles.ribbon_container}>
                <div className={styles.ribbon}>

                    <Action 
                        imgName='menu'/>

                    <div className={styles.new_email_container}>
                        <div className={styles.new_email}>
                            <Image 
                                src={'./media/ribbon/new_email.png'}
                                className={styles.img}/>
                            <span className={styles.text}>New email</span>
                        </div>
                        <div className={styles.dropdown}>
                            <Image 
                                src={'./media/ribbon/white_dropdown.png'}
                                className={styles.img}/>
                        </div>
                    </div>

                    <ActionWithDropdown 
                        imgName='delete'/>
                    <Action 
                        imgName='archive'/>
                    <ActionWithDropdown 
                        imgName='report'/>
                    <Action 
                        imgName='sweep'/>
                    <ActionWithDropdown 
                        imgName='move_to_folder'/>

                    <Divider />

                    <Action 
                        imgName='reply'/>
                    <Action 
                        imgName='reply_all'/>
                    <ActionWithDropdown 
                        imgName='forward'/>

                    <Divider />

                    <div className={styles.quick_steps_container}>
                        <div className={styles.action}>
                            <Image 
                                src={`./media/ribbon/quick_steps.png`}
                                className={styles.img}/>
                            <span className={styles.title}>Quick steps</span>
                        </div>
                        <div className={styles.dropdown}>
                            <Image 
                                src={`./media/ribbon/dropdown.png`}
                                className={styles.img}/>
                        </div>
                    </div>

                    <Action 
                        imgName='unread_email'
                        title='Read / Unread'
                        expanded/>

                    <ActionWithDropdown 
                        imgName='categorise'/>
                    <ActionWithDropdown 
                        imgName='flag'/>
                    <Action 
                        imgName='pin'/>
                    <ActionWithDropdown 
                        imgName='snooze'/>
                    
                    <Divider />

                    <Action 
                        imgName='undo'/>
                    
                    <Divider />

                    <Action
                        imgName='more'/>
                </div>
                <div className={styles.ribbon_dropdown}>
                    <Image 
                        src={`./media/ribbon/dropdown.png`}
                        className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default EmailHeader;