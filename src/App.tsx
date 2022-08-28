import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Header from "./components/common/header/Header";
import Login from "./components/screens/Login/Login";

function App() {

    return (
        <div className="App">
            <Header/>
            <Login/>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/login' element={<Login/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
