import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado }></Formulario>
      <Time nome="Programação"> </Time>
      <Time nome="Frontend"> </Time>
      <Time nome="Data Science"> </Time>
      
    </div>
  );
}

export default App;
