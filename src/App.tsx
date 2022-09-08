import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Albums from "./components/pages/Albums/Albums";
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from "./components/common/ProtectedRoute";
import Album from "./components/pages/Album/Album";

export type AppDispatch = typeof store.dispatch;

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/' element={<ProtectedRoute><Albums/></ProtectedRoute>}/>
                        <Route path='/album:id' element={<ProtectedRoute><Album/></ProtectedRoute>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
