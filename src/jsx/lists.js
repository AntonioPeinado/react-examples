import React from 'react';

const numbers = [1,2,3];

function ListItem(props){
    return <li>{props.content}</li>
}

export default function Lists() {
  return (
    <ul>
        {numbers.map((n,i) => {
            return <ListItem key={i} content={n} />
        })}
    </ul>
  );
}
