import React from 'react';

const pintarA = true;

function content() {
  if (pintarA) {
    return 'A';
  }
  return 'B'
}

export default function ConditionalRendering() {
  return (
    <React.Fragment>
      <h1>{pintarA ? 'A' : 'B'}</h1>
      <h2>{content()}</h2>
      <h3>{pintarA && 'A' || 'B'}</h3>
    </React.Fragment>
  );
}
