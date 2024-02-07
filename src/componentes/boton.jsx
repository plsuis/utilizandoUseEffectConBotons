function MyButton() {
  const clicBoton = ()=>{
    console.log('boas click')
  }
    return (
      <button onClick={clicBoton}>Son un botón</button>
    );
  }

  export{MyButton}