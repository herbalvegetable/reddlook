import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { 
    Mail24Regular,

    Delete20Regular,
    Archive20Regular,
    ShieldError20Regular,
    Broom20Regular,
    FolderArrowRight20Regular,
    ArrowReply20Regular,
    ArrowReplyAll20Regular,
    ArrowForward20Regular,
    Flash20Regular,
    MailRead20Regular,
    Tag20Regular,
    Flag20Regular,
    Pin20Regular,
    Clock20Regular,
    ArchiveSettings20Regular,
    ArrowUndo20Regular,
    AppsAddIn20Regular,
    MoreHorizontal20Regular,
 } from '@fluentui/react-icons';

import styles from './EmailHeader.module.css';

import Action from './Action/Action';
import ActionWithDropdown from './ActionWithDropdown/ActionWithDropdown';
import Divider from './Divider/Divider';

const EmailHeader = props => {



    return (
        <div className={styles.header}>
            <div className={styles.tabs}>
            {
                ['Home', 'View', 'Help'].map((text, i) => {
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
                            {/* <Image 
                                src={`/media/ribbon/new_email.png`}
                                className={styles.img}/> */}
                            <Mail24Regular 
                                className={styles.img}
                                primaryFill='#fff'/>
                            <span className={styles.text}>New email</span>
                        </div>
                        <div className={styles.dropdown}>
                            <Image 
                                src={'/media/ribbon/white_dropdown.png'}
                                className={styles.img}/>
                        </div>
                    </div>

                    <ActionWithDropdown 
                        imgName='delete'
                        IconEl={Delete20Regular}
                        iconColor='#616161'/>
                    <Action 
                        imgName='archive'
                        IconEl={Archive20Regular}
                        iconColor='#498205'/>
                    <ActionWithDropdown 
                        imgName='report'
                        IconEl={ShieldError20Regular}
                        iconColor='#a4262c'/>
                    <Action 
                        imgName='sweep'
                        IconEl={Broom20Regular}
                        iconColor='#616161'/>
                    <ActionWithDropdown 
                        imgName='move_to_folder'
                        IconEl={FolderArrowRight20Regular}
                        iconColor='#0078d4'/>

                    <Divider />

                    <Action 
                        imgName='reply'
                        IconEl={ArrowReply20Regular}
                        iconColor='#881798'/>
                    <Action 
                        imgName='reply_all'
                        IconEl={ArrowReplyAll20Regular}
                        iconColor='#881798'/>
                    <ActionWithDropdown 
                        imgName='forward'
                        IconEl={ArrowForward20Regular}
                        iconColor='#0078d4'/>

                    <Divider />

                    <div className={styles.quick_steps_container}>
                        <div className={styles.action}>
                            <Flash20Regular
                                className={styles.img}
                                primaryFill={'#aa8413'}/>
                            <span className={styles.title}>Quick steps</span>
                        </div>
                        <div className={styles.dropdown}>
                            <Image 
                                src={`/media/ribbon/dropdown.png`}
                                className={styles.img}/>
                        </div>
                    </div>

                    <Action 
                        imgName='unread_email'
                        title='Read / Unread'
                        expanded
                        IconEl={MailRead20Regular}
                        iconColor='#616161'/>

                    <ActionWithDropdown 
                        imgName='categorise'
                        IconEl={Tag20Regular}
                        iconColor='#616161'/>
                    <ActionWithDropdown 
                        imgName='flag'
                        IconEl={Flag20Regular}
                        iconColor='#a4262c'/>
                    <Action 
                        imgName='pin'
                        IconEl={Pin20Regular}
                        iconColor='#0078d4'/>
                    <ActionWithDropdown 
                        imgName='snooze'
                        IconEl={Clock20Regular}
                        iconColor='#616161'/>
                    <ActionWithDropdown 
                        imgName='snooze'
                        IconEl={ArchiveSettings20Regular}
                        iconColor='#0078d4'/>
                    
                    <Divider />

                    <Action 
                        imgName='undo'
                        IconEl={ArrowUndo20Regular}
                        iconColor='#616161'
                        disabled/>
                    
                    <Divider />

                    <Action 
                        IconEl={AppsAddIn20Regular}
                        iconColor='#ca5010'/>
                    
                    <Divider />

                    <Action
                        imgName='more'
                        IconEl={MoreHorizontal20Regular}
                        iconColor='#242424'/>
                </div>
                <div className={styles.ribbon_dropdown}>
                    <Image 
                        src={`/media/ribbon/dropdown.png`}
                        className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default EmailHeader;