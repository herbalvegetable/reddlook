import { useState, useEffect } from 'react';

import styles from './SectionList.module.css';

import SectionDropdown from './SectionDropdown/SectionDropdown';

import {
    MailInbox24Regular,
    Send20Regular,
    Drafts20Regular,
    Delete20Regular,
    FolderProhibited20Regular,
    Archive20Regular,
    Note20Regular,
} from '@fluentui/react-icons';

const SectionList = props => {

    const { abortInboxFetch, inboxLoading, setInboxLoading } = props;

    const [sections, setSections] = useState([
        {
            title: 'Favourites',
            sections: [
                {
                    title: 'Inbox',
                    imgName: 'inbox',
                    Icon: MailInbox24Regular,
                    unreadNum: 2045,
                    focused: true,
                    numHighlighted: true,
                },
                {
                    title: 'Sent Items',
                    imgName: 'sent_items',
                    Icon: Send20Regular,
                },
                {
                    title: 'Drafts',
                    imgName: 'drafts',
                    Icon: Drafts20Regular,
                    unreadNum: 3,
                },
                {
                    title: 'Deleted Items',
                    imgName: 'deleted_items',
                    Icon: Delete20Regular,
                },
            ],
            options: [
                'Add favourite',
            ],
        },

        {
            title: 'Folders',
            sections: [
                {
                    title: 'Inbox',
                    imgName: 'inbox',
                    Icon: MailInbox24Regular,
                    unreadNum: 2045,
                    numHighlighted: true,
                },
                {
                    title: 'Drafts',
                    imgName: 'drafts',
                    Icon: Drafts20Regular,
                    unreadNum: 3,
                },
                {
                    title: 'Sent Items',
                    imgName: 'sent_items',
                    Icon: Send20Regular,
                },
                {
                    title: 'Deleted Items',
                    imgName: 'deleted_items',
                    Icon: Delete20Regular,
                },
                {
                    title: 'Junk Email',
                    imgName: '',
                    Icon: FolderProhibited20Regular,
                },
                {
                    title: 'Archive',
                    imgName: '',
                    Icon: Archive20Regular,
                    unreadNum: 2,
                },
                {
                    title: 'Notes',
                    imgName: '',
                    Icon: Note20Regular,
                },

                // Example Subreddits
                {
                    title: 'all',
                    imgName: '',
                    subreddit: 'all',
                },
                {
                    title: 'news',
                    imgName: '',
                    subreddit: 'news',
                },
                {
                    title: 'bestofredditorupdates',
                    imgName: '',
                    subreddit: 'bestofredditorupdates',
                },
                {
                    title: 'sgexams',
                    imgName: '',
                    subreddit: 'sgexams',
                },
                {
                    title: 'singapore',
                    imgName: '',
                    subreddit: 'singapore',
                },
                {
                    title: 'relationship_advice',
                    imgName: '',
                    subreddit: 'relationship_advice',
                },
                {
                    title: 'unresolvedmysteries',
                    imgName: '',
                    subreddit: 'unresolvedmysteries',
                },
                {
                    title: 'todayilearned',
                    imgName: '',
                    subreddit: 'todayilearned',
                },
                {
                    title: 'askreddit',
                    imgName: '',
                    subreddit: 'askreddit',
                },
                {
                    title: 'askscience',
                    imgName: '',
                    subreddit: 'askscience',
                },
                {
                    title: 'asksingapore',
                    imgName: '',
                    subreddit: 'asksingapore',
                },
                {
                    title: 'dataisbeautiful',
                    imgName: '',
                    subreddit: 'dataisbeautiful',
                },
                {
                    title: 'youshouldknow',
                    imgName: '',
                    subreddit: 'youshouldknow',
                },
                {
                    title: 'memes',
                    imgName: '',
                    subreddit: 'memes',
                },
                {
                    title: 'lifeprotips',
                    imgName: '',
                    subreddit: 'lifeprotips',
                },
                {
                    title: 'thathappened',
                    imgName: '',
                    subreddit: 'thathappened',
                },
                {
                    title: 'letsnotmeet',
                    imgName: '',
                    subreddit: 'letsnotmeet',
                },
                {
                    title: 'writingprompts',
                    imgName: '',
                    subreddit: 'writingprompts',
                },
                {
                    title: 'nosleep',
                    imgName: '',
                    subreddit: 'nosleep',
                },
                {
                    title: 'astrophotography',
                    imgName: '',
                    subreddit: 'astrophotography',
                },
                {
                    title: 'offmychest',
                    imgName: '',
                    subreddit: 'offmychest',
                },
                {
                    title: 'iama',
                    imgName: '',
                    subreddit: 'iama',
                },
                {
                    title: 'technology',
                    imgName: '',
                    subreddit: 'technology',
                },
            ],
            options: [
                'Create new folder',
            ],
        },

        {
            title: 'Groups',
            sections: [],
            options: [
                'New group',
                'Discover groups',
                'Manage groups',
            ],
        },
    ]);

    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={styles.main}
            onMouseEnter={e => setIsHover(true)}
            onMouseLeave={e => setIsHover(false)}
            // style={{ overflowY: isHover ? 'auto' : 'hidden', }}
            >
            {
                sections.map((section, i) => {
                    return <SectionDropdown
                        key={i.toString()}
                        title={section.title}
                        sections={section.sections}
                        options={section.options}
                        inboxLoading={inboxLoading}
                        setInboxLoading={setInboxLoading}
                        abortInboxFetch={abortInboxFetch}
                        expanded />
                })
            }
        </div>
    )
}

export default SectionList;