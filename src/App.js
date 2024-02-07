import './App.css';
import { useState } from 'react';
import { MyButton } from './componentes/boton';
import { Usuarios } from './componentes/usuarios';
import { Contador } from './componentes/probauseEfect';
import { MyButton2 } from './componentes/boton2';
import { VariandoState } from './componentes/_useState';
import { OutroBotonUseEffect } from './componentes/outroBotonUseEfect';

function App() {
  const [count, setCount] = useState(0);
  const boas = ()=>{
    console.log('ola')
  }
  return (
    <div className="App">
      <Usuarios persoa={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}>
        <VariandoState count={count} setCount={setCount} />
        <OutroBotonUseEffect />
        <Contador />
        <MyButton />
        <MyButton2 funcion={boas}/>
      </Usuarios>
    </div>
  );
}

export default App;
