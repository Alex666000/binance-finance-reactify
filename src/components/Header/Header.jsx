import React from 'react';
import Logo from 'components/Header/Logo/Logo'
import {HeaderMenu} from 'components/Header/HeaderMenu/HeaderMenu'
import style from './style.module.css'


export const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <HeaderMenu/>
        </header>
    );
};

