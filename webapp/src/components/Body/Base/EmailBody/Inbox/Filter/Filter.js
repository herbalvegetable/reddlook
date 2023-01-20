import { Component } from 'react';
import { Image, Dropdown, DropdownButton } from 'react-bootstrap';
import onClickOutside from 'react-onclickoutside';

import styles from './Filter.module.css';

class Filter extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleClickOutside(e) {
        this.props.setIsOpenFilter(false);
    }
    render() {
        const {
            isOpenFilter,
            setIsOpenFilter,
            setIsHoverFilter,
            setPostType,
            fetchPosts,
            setInboxLoading,
            postTypeDisplay,
        } = this.props;
        
        return (
            <div
                className={styles.filter_container}
                onClick={e => {
                    e.preventDefault();

                    setIsOpenFilter(!isOpenFilter);
                }}

                onMouseEnter={e => setIsHoverFilter(true)}
                onMouseLeave={e => setIsHoverFilter(false)}>

                <div className={styles.img_container}>
                    <Image
                        src={'/media/inbox/filter.png'}
                        className={styles.img} />
                </div>
                <span
                    className={styles.text}>
                    Filter
                </span>

                {
                    isOpenFilter &&
                    <div className={styles.filter_dropdown}>
                        {
                            Object.entries(postTypeDisplay).map(([type, typeStr], i) => {
                                return <div
                                    key={i.toString()}
                                    className={styles.type_container}
                                    onClick={e => {
                                        setPostType(type);
                                        fetchPosts(type);
                                        setInboxLoading(true);
                                    }}>
                                    <div className={styles.checked_container}>

                                    </div>
                                    <div className={styles.image_container}>

                                    </div>
                                    <span className={styles.text}>{typeStr}</span>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default onClickOutside(Filter);