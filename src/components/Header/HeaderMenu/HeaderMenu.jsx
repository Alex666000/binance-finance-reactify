import React from 'react';
import style from './style.module.css'


export const HeaderMenu = () => {
    return (
        <nav>
            <ul className={style.list}>
                <li>Main</li>
                <li>Stocks</li>
            </ul>
        </nav>
    );
};


