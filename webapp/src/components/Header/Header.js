import { useState, useEffect } from 'react';

import styles from './Header.module.css';

import AppLauncher from './AppLauncher/AppLauncher';
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import ActionBar from './ActionBar/ActionBar';

const Header = props => {



    return (
        <div className={styles.header}>
            <AppLauncher />
            <Title />
            <SearchBar />
            <ActionBar />
        </div>
    )
}

export default Header;