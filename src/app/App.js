import React from 'react'
import Tabs from './component/Tabs'
import RouteTabs from './component/RouteTabs/index'
import {loadTabInfo} from '../dataService/dataService'
import {BrowserRouter} from 'react-router-dom'

import '../index.css';

const OrderById = pages => pages.sort((l, r) => l.order > r.order)

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        loadTabInfo().then(res => this.setState({pages: OrderById(res)}))
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Tabs pages={this.state.pages}/>
                    <RouteTabs pages={this.state.pages}/>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;
