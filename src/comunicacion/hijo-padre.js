import React from 'react';
function Hijo(props) {
    return <button onClick={props.update}>Click</button>
}

export default class HijoPadre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this._update = this._update.bind(this)
    }
    _update() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <React.Fragment>
                <Hijo update={this._update}/>
                <h1>{this.state.count}</h1>
            </React.Fragment>
        )
    }
}