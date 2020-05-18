import React from 'react';

function Foo(props) {
    return <h1>{props.user.name}</h1>
}

class BarreraDeErrores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }
    // *. Cuando se produzca un error al pintar cualquiera de mis hijos (no solo los hijos directos)
    // Pero no salta cuando se producen errores en el propio componente
    componentDidCatch(err) {
        this.setState({ error: err });
    }
    render() {
        if (this.state.error) {
            return <div role="alert">Ha ocurrido un error insesperado</div>;
        }
        return this.props.children;
    }
}


export default class Lifecycle extends React.Component {
    // 1. Cuando se crea el componente
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
        console.log('constructor');
    }
    // *. Despues del render en caso de que se hayan actualizado las props o el state
    // (no salta la primera vez que se crea el componenet)
    componentDidUpdate(prevProps, prevState) {
        console.log('update');
    }
    // 3. Despues de que se pinte el componente por primera vez
    componentDidMount() {
        console.log('mount');
    }
    // *. Cuando el componente sea destruido
    componentWillUnmount() {
        console.log('unmount');
    }
    // 2. Se pinta el componente por primera vez
    // *. Cada vez que cambie el state o las props
    render() {
        console.log('render');
        return (
            <div>
                <h1>Hola {this.props.name} {this.state.value}</h1>
                <BarreraDeErrores>
                    <Foo></Foo>
                </BarreraDeErrores>
            </div>
        );
    }
}