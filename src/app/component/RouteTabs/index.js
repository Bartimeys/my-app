import React from "react";
import {Route, Switch, Redirect } from "react-router";
import RootComponent from '../rootComponent'

const defTab = arr => arr.filter(p => p.order === 0).map(o => '/'.concat(o.id)).pop()

const setProm = path => import(`../../view/${path}`)

//err
const PageNotFound = ({location}) => {
    const path = location ? location.pathname : ""
    return <h3>Page not found {path} </h3>
};

const DefPage = ({pages}) => {
    const tab = defTab(pages)
    return tab ? <Redirect to={tab} /> : <PageNotFound/>
};

const RouteTabs = ({pages}) => (
    <Switch>{
        pages
            .map(({id, order, path}) => (
                <Route
                    key={order}
                    path={`/${id}`}
                    render={({match}) => <RootComponent loader={match ? setProm(path) : null} />}/>
            ))
    }
        <Route exact from="/" render={(props) => <DefPage pages={pages}/>} />
        <Route component={PageNotFound}/>
    </Switch>
);

export default RouteTabs