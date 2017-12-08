import React, { Component } from 'react';
import Tabs from './component/tabs';

import './App.css';


const App = (props) => {
    return (
        <Tabs selected={props.firstSelect || 0}>

            {props.tabs.map(tab =>
                <Pane label={tab.name}>{tab.content}</Pane>)
            }
        </Tabs>
    );
}

const Pane = (props) => {
    return <div>{props.children}</div>;
}

export default App;

