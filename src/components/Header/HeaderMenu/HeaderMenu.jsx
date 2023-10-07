import React from 'react';
import style from './style.module.css'
import {NavLink} from 'react-router-dom'


export const HeaderMenu = () => {
    return (
        <nav>
            <ul className={style.list}>
                <li>
                    <NavLink to={'/'} className={({isActive}) => isActive ? style.active : null}>
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/stocks'} className={({isActive}) => isActive ? style.active : null}>
                        Stocks
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};


