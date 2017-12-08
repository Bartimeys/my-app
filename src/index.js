import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './component/tabs';
import App from './App';
import tabs from './component/tabs-info';
import Pane from './component/Pane';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App tabs={tabs} firstSelect={1} />, document.getElementById('root'));