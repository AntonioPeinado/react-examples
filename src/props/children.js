import React from 'react';

export default function Children(props) {
    const style = {
        display: 'flex'
    };
    return <div style={style}>{props.children}</div>
}