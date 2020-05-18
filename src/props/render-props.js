import React from 'react';
import ReactDOM from 'react-dom';

export default function RenderProps(props) {
    return (
        <React.Fragment>
            <header>
                {props.header()}
            </header>
            <main>
                {props.content()}
            </main>
            <footer>
                {props.footer()}
            </footer>
        </React.Fragment>
    )
}

// ReactDOM.render(
//     <React.StrictMode>
//         <Layout
//             header={() => <h1>Header</h1>}
//             content={() => <div>Contenido</div>}
//             footer={() => <div>Footer</div>}
//         />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
