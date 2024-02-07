import React, { useEffect, useState } from 'react';
function Contador() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0)
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    // Actualiza el title de la página en cada click!
    document.title = `Has hecho clic ${count} veces`
  })
  useEffect(() => {
    setCalculation(() => count3 * 2);
  }, [count3]); // <- add the count variable here
  /* useEffect(() => {
    setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);
  }); */
  useEffect(() => {
    setTimeout(() => {
      setCount((count2) => count2 + 1);
    }, 1000);
  }, []); // <- add empty brackets here
  

  return (
    <div>
        <h1>I've rendered {count2} times!</h1>
      <span>El contador está a {count}</span> 
      <button onClick={() => setCount(count + 1)}>
        Incrementar contador
      </button>
      <p>Calculation: {calculation}</p>
      
    </div>
  )
}

export {
    Contador
}