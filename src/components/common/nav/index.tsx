import React from 'react';
import NavStyles from './nav.module.css';
import {ROUTES} from "../../routes";
import {Link} from "react-router-dom";

const Nav: React.FC = () => {
    return <nav >
        <ul className={NavStyles.list}>
            {ROUTES.map(({url, label}) => <li key={url}><Link to={url}>{label}</Link></li>)}
        </ul>
    </nav>;
}

export default Nav;
