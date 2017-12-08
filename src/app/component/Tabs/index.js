import React from 'react';
import {NavLink} from 'react-router-dom';


const Tabs = ({pages}) => (
    <nav>
        {pages
            .map(({order,id, title}) =>
                <NavLink activeClassName="active"
                         key={order}
                         to={`/${id}`}>
                    {title}
                </NavLink>
            )}
    </nav>
);

export default Tabs