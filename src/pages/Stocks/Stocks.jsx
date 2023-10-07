import React from 'react';
import style from './style.module.css'
import {SearchStocks} from 'pages/Stocks/SearchStocks/SearchStocks'

export const Stocks = () => {
    return (
        <div className={style.stocks}>
            <h1>Stocks</h1>
            <SearchStocks/>
        </div>
    );
};
