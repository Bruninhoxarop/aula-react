import { logDOM } from '@testing-library/react';
import './App.css';
import Header from './Header';
import Produto from './Produto';
import {useState} from 'react';

function App() {
  var x = "variável";
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        
        <Header title="contador" />
        <input type="button" value="Clique" onClick={increment} /> 
        <p>{contador} cliques!</p>

        <Header title={x}/>
        <Header title="texto puro"/>
      </header>

      <div className='desafio'>
        <h1 className='produtos'>Produtos</h1>
        <Produto nom="escova de dente"/>
        <Produto nom="pasta de dente"/>
        <Produto nom="escova de cabelo"/>
        <Produto nom="creme de cabelo"/>
      </div>
    </div>
  );
}

export default App;