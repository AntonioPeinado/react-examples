import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from './comunicacion/context';


ReactDOM.render(
    <div>
        <PubSub></PubSub>
    </div>,
    document.getElementById('root')
)