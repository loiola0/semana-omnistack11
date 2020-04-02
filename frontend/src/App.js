import React from 'react';
import './global.css';

import Routes from './routes';

//JSX (JavaScript XML)-quando o html tá escrito no javascript.
//Estado:informação que vai ser mantida pelo componente.

function App() {// um componente no react é nada mais é do que a uma função que retorna um html
  //let [counter,setCounter] = useState(0);
    //Array [valor, funcaoDeAtualizacao]

  return (
    <Routes/>
  );
}

export default App;
