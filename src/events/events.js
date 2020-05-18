import React from 'react';

export default function Events() {
  var onClick = () => {
      window.alert('click');
  }
  return <button onClick={onClick}>Click!</button>
}

