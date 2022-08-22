import React from 'react';
import {ROUTES} from "../routes";
import {Routes, Route} from "react-router-dom";

const AppRouter: React.FC = () => {
    return <Routes>
        {ROUTES.map((route) => <Route
            key={route.url}
            path={route.url}
            element={route.component}
        />)}
    </Routes>;
}

export default AppRouter;