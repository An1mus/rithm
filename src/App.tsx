import React, {useEffect} from 'react';
import './App.css';
import {Nav} from "./components/common";
import AppRouter from "./components/appRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    useEffect(() => {
        console.log("render");
    }, [])

    return (
        <div className="app">
            <BrowserRouter>
                <header>
                    <h1>RITHM</h1>
                    <Nav />
                </header>

                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
