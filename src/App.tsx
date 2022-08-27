import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/common/header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>

            </BrowserRouter>
        </div>
    );
}

export default App;
