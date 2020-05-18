import React, { useState } from 'react';

export default class UpdateStateWithClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    _onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    } 
    render() {
        return (
            <div>
                <button onClick={this._onClick}>Click</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

function UpdateStateWithHooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <h1>{count}</h1>
        </div>
    );
}
