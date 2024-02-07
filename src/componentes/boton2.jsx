function MyButton2({funcion}) {
  
    return (<>
      <button onClick={()=> {funcion()}}>Segundo boton</button>
      <button onClick={funcion}>Tercer boton</button>
    </>
    );
  }

  export{MyButton2}