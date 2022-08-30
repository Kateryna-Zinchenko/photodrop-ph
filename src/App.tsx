import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Albums from "./components/pages/Albums/Albums";
import { Provider } from 'react-redux';
import store from './store';

export type AppDispatch = typeof store.dispatch;

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/albums' element={<Albums/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
