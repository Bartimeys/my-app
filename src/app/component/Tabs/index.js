import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.css';

const Tabs = ({pages}) => (
    <nav  id="material-tabs">
        {pages
            .map(({order,id, title}) =>
                <NavLink id={id} activeClassName="active"
                         key={order}
                         to={`/${id}`}>
                    {title}
                </NavLink>
            )}
        <span className="yellow-bar">

        </span>
    </nav>

);

export default Tabs