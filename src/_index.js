import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const examples = [
    'components/component',
    'jsx/conditional-rendering',
    'jsx/lists'
]

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumnGap: '15px' }}>
                    <nav>
                        <ul>
                            {examples.map((example, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/${example}`}>{example}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <main>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                {examples.map((example, i) => {
                                    return (
                                        <Route key={i} exact path={`/${example}`} component={React.lazy(() => import(`./${example}`))} />
                                    )
                                })}
                            </Switch>
                        </React.Suspense>
                    </main>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}

class Example extends React.Component {
    state = {
        text: ''
    }
    async componentDidMount(){
        this._aborController = new AbortController();
        const response = await fetch('http://localhost:3000', {
            signal: this._aborController.signal
        })
        const text = await response.text();
        this.setState({text})
    }
    componentWillUnmount(){
        this._aborController.abort();
    }
    render() {
        return (
            <div>
               {this.state.text}
            </div>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));
ReactDOM.unmountComponentAtNode(document.getElementById('root'));