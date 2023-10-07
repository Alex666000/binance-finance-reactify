import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from 'pages/Main/Main'

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'stocks'} element={<div>Stocks</div>}/>
            <Route path={'*'} element={<div>Page not found</div>}/>
        </Routes>
    );
};

export default Router;
