import React from 'react';

const MyContext = React.createContext('foo');


class Consumer1 extends React.Component {
    render() {
        return (
            <Consumer2></Consumer2>
        )
    }
}

class Consumer2 extends React.Component {
    static get contextType() {
        return MyContext;
    }
    render() {
        return (
            <span>{this.context}</span>
        );
    }
}



export default function Provider() {
    return (
        <div>
            <MyContext.Provider value="bar">
                <Consumer1></Consumer1>
            </MyContext.Provider>
            <MyContext.Provider value="baz">
                <Consumer1></Consumer1>
            </MyContext.Provider>
        </div>
    )
}