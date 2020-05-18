import React, {useState} from 'react';

export default class InitialStateWithClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foo: 'Hello world'
        };
    }
    render(){
        return <h1>{this.state.foo}</h1>
    }
}

function InitialStateWithHooks(){
    const [foo] = useState('Hello world');
    return <h1>{foo}</h1>
}