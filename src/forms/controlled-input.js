import React from 'react';

export class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'Intitial value',
            check: true
        }
    }
    _updateFoo = (ev) => {
        const value = ev.target.value;
        this.setState({foo:value});
    }
    _updateCheck = (ev) => {
        const value = ev.target.checked;
        this.setState({check: value});
    }
    render() {
        return (
            <form>
                <input name="foo" type="text" value={this.state.foo} onChange={this._updateFoo} />
                <input name="check" type="checkbox" checked={this.state.check} onChange={this._updateCheck}/>
            </form>
        );
    }
}