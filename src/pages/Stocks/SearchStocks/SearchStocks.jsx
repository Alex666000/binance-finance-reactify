import React, {useState} from 'react';
import style from 'pages/Stocks/SearchStocks/style.module.css'

export const SearchStocks = () => {
    const [value, setValue] = useState('')

    return (
        <div className={style.searchBlock}>
            <input
                className={style.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

