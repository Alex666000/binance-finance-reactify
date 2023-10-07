import React from 'react';
import style from 'components/Header/Logo/style.module.css'


const Logo = () => {
    return (
        <div className={style.logo}>
            <div className={style.title}>RF</div>
            <div className={style.subtitle}>My finance</div>
        </div>
    );
};

export default Logo;
