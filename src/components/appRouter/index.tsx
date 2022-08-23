import React from 'react';
import {ROUTES} from "../routes";
import {Routes, Route} from "react-router-dom";
import './index.css';

const AppRouter: React.FC = () => {
    return <div className={'routes-container'}>
        <Routes>
            {ROUTES.map((route) => <Route
                key={route.url}
                path={route.url}
                element={route.component}
            />)}
        </Routes>
    </div>;
}

export default AppRouter;