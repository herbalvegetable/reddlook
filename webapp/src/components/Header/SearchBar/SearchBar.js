import { useState, useEffect } from 'react';
import { Form, Image } from 'react-bootstrap';

import styles from './SearchBar.module.css';

const SearchBar = props => {



    return (
        <div className={styles.main}>
            <div className={styles.magnifying_glass}>
                <Image
                    src={'./media/magnifying_glass.png'}
                    className={styles.img}/>
            </div>
            <div
                className={styles.input} 
                contentEditable
                data-text='Search'>
                
            </div>
        </div>
    )
}

export default SearchBar;