import React from 'react'

import './index.css';

const DummyList = () => (
    <div className="tab-content">
        <div id="tab2">
            <div className="wrapper card">
                <div className="mat_list_title">
                    <h1>A Title</h1>
                </div>
                <ul className="mat_list card scrollable">
                    <li><p>This is the pure List</p></li>
                    <li><p>In a Material like design</p></li>
                    <li><a>Containing your elements</a></li>
                    <li><a>In every way you want them to be handled</a></li>
                </ul>
            </div>
    </div>
    </div>
);

export default DummyList