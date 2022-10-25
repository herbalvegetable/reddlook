import { useState, useEffect } from 'react';

import styles from './SectionList.module.css';

import SectionDropdown from './SectionDropdown/SectionDropdown';

const SectionList = props => {

    const [favourites, setFavourites] = useState({
        sections: [
            {
                title: 'Inbox',
                imgName: 'inbox',
                unreadNum: 2045,
                highlighted: true,
            },
            {
                title: 'Sent Items',
                imgName: 'sent_items',
            },
            {
                title: 'Drafts',
                imgName: 'drafts',
                unreadNum: 3,
            },
            {
                title: 'Deleted Items',
                imgName: 'deleted_items',
            },
        ],
        options: [
            'Add favourite',
        ],
    });

    const [folders, setFolders] = useState({
        sections: [
            {
                title: 'Inbox',
                imgName: 'inbox',
                unreadNum: 2045,
                highlighted: true,
            },
            {
                title: 'Sent Items',
                imgName: 'sent_items',
            },
            {
                title: 'Drafts',
                imgName: 'drafts',
                unreadNum: 3,
            },
            {
                title: 'Deleted Items',
                imgName: 'deleted_items',
            },
            {
                title: 'Junk Email',
                imgName: '',
            },
            {
                title: 'Archive',
                imgName: '',
                unreadNum: 2,
            },
            {
                title: 'Notes',
                imgName: '',
            },
        ],
        options: [
            'Create new folder',
        ],
    });

    const [groups, setGroups] = useState({
        sections: [],
        options: [
            'New group',
            'Discover groups',
        ],
    });

    return (
        <div className={styles.main}>
            <SectionDropdown 
                title='Favourites'
                sections={favourites.sections}
                options={favourites.options}
                expanded/>
            <SectionDropdown 
                title='Folders'
                sections={folders.sections}
                options={folders.options}
                expanded/>
            <SectionDropdown 
                title='Groups'
                sections={groups.sections}
                options={groups.options}
                expanded/>
        </div>
    )
}

export default SectionList;