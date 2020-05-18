import React from 'react';

export default class Refs extends React.Component {
    constructor(props){
        super(props);
        this._inputRef = React.createRef();
    }
    componentDidMount(){
        const input = this._inputRef.current; // HTMLInputElement
        input.focus();
    }
    render() {
        return (
            <div>
                <input type="text" />
                <input ref={this._inputRef} type="text" />
                <input type="text" />
            </div>
        );
    }
}