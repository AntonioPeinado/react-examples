import React from 'react';
import EventEmitter from 'eventemitter3';

/**
 * on, listen (type, cb, ctx) -> cuando se emita un evento del tipo type invoca a la callback cb en 
 *                               el context ctx
 * off, unlisten (type, cb, ctx) -> elimina el listener que se puso con los mismos parametros
 * emit (type, ...args) -> emite un evento del tipo type con los argumentos
 */

class CountEmitter extends EventEmitter {
    sub(cb, ctx) {
        this.on('update', cb, ctx);
    }
    unsub(cb, ctx) {
        this.off('update', cb, ctx);
    }
    pub(...data) {
        this.emit('update', ...data)
    }
}
const countEmitter = new CountEmitter();

const events = {
    update: '__UPDATE__'
}



class Updater extends React.Component {
    render() {
        const update = () => {
            countEmitter.emit()
        }
        return (
            <button onClick={update}>Click!</button>
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        countEmitter.sub(this._update, this);
    }
    componentWillUnmount() {
        countEmitter.unsub(this._update, this);
    }
    _update() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <span>{this.state.count}</span>
        );
    }
}



export default function PubSub() {
    return (
        <div>
            <Display></Display>
            <Updater></Updater>
        </div>
    )
}