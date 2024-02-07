import React, { useEffect, useState } from 'react';
function VariandoState({count, setCount}) {
  return (
    <div>
       
      <span>El contador está a {count}</span> 
      <button onClick={() => setCount(count + 1)}>
        Incrementar contador variando estado
      </button>
      
      
    </div>
  )
}

export {
    VariandoState
}