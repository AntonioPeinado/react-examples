import React from 'react';

function Display(props) {
    return (
        <span>{props.count}</span>
    );
}

function Updater(props) {
    return (
        <button onClick={props.update}>Click!</button>
    )
}

export default class Mediator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    _update() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <React.Fragment>
                <Updater update={this._update} />
                <Display count={this.state.count} />
            </React.Fragment>
        );
    }
}