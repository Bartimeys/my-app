import React from 'react';
import PropTypes from 'prop-types';


export default class RootComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Component: null,
        };
    }

    componentDidMount() {
        this.props.loader
            .then(module => this.setState({Component: module.default}))
            .catch(err => this.setState({Component: null}))
    }

    render() {
        const {Component} = this.state;
        if (Component)
            return <Component {...this.props} />;
        return <p>Error</p>;
    }
}

RootComponent.propTypes = {
    loader: PropTypes.instanceOf(Promise).isRequired
};