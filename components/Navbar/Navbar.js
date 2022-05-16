import React from 'react';
import A from '../A/A';
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <A href={'/'} text='Главная'></A>
            <A href={'/users'} text='Пользователи'></A>
        </div>
    );
};

export default Navbar;