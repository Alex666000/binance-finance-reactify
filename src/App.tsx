import React from 'react';
import {Header} from './components/Header/Header';
import Main from './pages/Main/Main';
import Router from './routes/Router';

function App() {
    return (
        <div className="App">
            <Header/>
            <Router />
        </div>
    );
}

export default App;
