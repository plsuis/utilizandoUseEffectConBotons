import React, { useEffect, useState } from 'react';
function OutroBotonUseEffect() {
    const [conta,setConta] = useState(0);

    useEffect(()=>{
        console.log('conta: ',conta)
    },[conta])
    useEffect(()=>{
        console.log('conta dentro de array: ',conta)
    },[])
    const clicBoton = () => setConta(conta + 1)
      return (
        <button onClick={clicBoton}>Son un botón de useEffect</button>
      );
    }

export{OutroBotonUseEffect}