import React from 'react'

const tabs = [{
    name: 'Tab 1',
    content: 'Content for 1'
}, {
    name: 'Tab 2',
    content: 'Content for 2'

}, {
    name: 'Tab 3',
    content: 'Content for 3'
}];

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: this.props.selected };
    }

    _renderTitles() {
        function labels(child, idx) {
            let activeClass = (this.state.selected === idx ? 'is-active' : '');
            return (
                <li role="tab" key={idx} aria-controls={`panel${idx}`}>
                    <a className={activeClass}  onClick={this.onClick.bind(this, idx)} href="#">
                        {child.props.label}
                    </a>
                </li>
            );
        }

        return (
            <ul className="tabs__labels" role="tablist">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    }


    onClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    }

    render() {
        console.log(this.props.children)
        return (
            <div className="tabs">
                {this._renderTitles()}

                <div className="tabs__content">
                    {this.props.children[this.state.selected]}
                </div>
            </div>);
    }
}

export default Tabs;