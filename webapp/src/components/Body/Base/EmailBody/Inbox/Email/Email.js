import { useState, useEffect, useContext } from 'react';
import { Image } from 'react-bootstrap';

import styles from './Email.module.css';

import GlobalContext from '../../../../../../context/GlobalContext';
import { convertSecondsToShortDate } from '../../../../../../hooks/useConvertSecondsToDate';

const Email = props => {

    const { profileIconColour: profileIconColourCtx, setProfileIconColour: setProfileIconColourCtx } = useContext(GlobalContext);

    const { index, author, title, body, score, commentsNum, time, unread, profileIconColour, selectedEmailIndex, setSelectedEmailIndex, markRead, markUnread, abortFetch, setLoading } = props;

    const [isHover, setIsHover] = useState(false);
    const [isHoverDelete, setIsHoverDelete] = useState(false);

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const isSelected = selectedEmailIndex === index;

        setSelected(isSelected);
        isSelected && setProfileIconColourCtx(profileIconColour);
    }, [selectedEmailIndex]);

    return (
        <div 
            className={`${styles.main} ${unread ? styles.unread : ''} ${selected ? styles.selected : ''}`}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={() => {
                abortFetch();
                setSelectedEmailIndex(index);
                markRead(index);
                setLoading(!selected);
            }}>
            <div className={`${styles.profile_icon_container} ${unread ? styles.unread : ''}`}>
            {
                (isHover || selected) ? 

                <input type='radio' className={styles.radio_btn}/>

                :

                <div className={styles.profile_icon} style={{backgroundColor: profileIconColour,}}>
                    <span className={styles.text}>{author.slice(0, 2).toUpperCase()}</span>
                </div>
            }
            </div>

            <div className={styles.content}>
                <div className={styles.top_row}>
                    <div className={`${styles.author} ${unread ? styles.unread : ''}`}>{author} /RED</div>
                    {
                        isHover && <div className={styles.actions}>
                            <div 
                                className={styles.action}
                                onClick={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    markUnread(index);
                                }}>
                                <Image 
                                    src='./media/inbox/mark_unread.png'
                                    className={styles.img}/>
                            </div>
                            <div className={styles.action}>
                                <Image 
                                    src='./media/inbox/flag.png'
                                    className={styles.img}/>
                            </div>
                            <div className={styles.action}>
                                <Image 
                                    src='./media/inbox/pin.png'
                                    className={styles.img}/>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.middle_row}>
                    <div className={`${styles.title} ${unread ? styles.unread : ''}`}>{title}</div>
                    <div className={`${styles.time} ${unread ? styles.unread : ''}`}>{convertSecondsToShortDate(time)}</div>
                </div>
                <div className={`${styles.body} ${unread ? styles.unread : ''}`}>
                    {body || 'CAUTION: This email is from the Internet. Do not click on links or attachments if you are unsure of the source.'}
                </div>
            </div>

            <div className={styles.space_container}>
                {
                    isHover && <div 
                        className={styles.delete_btn}
                        onMouseOver={() => setIsHoverDelete(true)}
                        onMouseOut={() => setIsHoverDelete(false)}>
                        <Image 
                            src={`./media/inbox/${isHoverDelete ? 'red_delete': 'delete'}.png`}
                            className={styles.img}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Email;