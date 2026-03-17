import { logDOM } from '@testing-library/react';
import '../App.css';
import {Link} from 'react-router-dom';

// Componentes
import Header from '../Header';
import Produto from '../Produto';

// A propriedade dos componentes são alteráveis fora
// dos seus arquivos.

// Estado
import {useState} from 'react';

function Home() {
  var x = "variável";
  
  // é criado a varíavel contador(estado atual) e setcontador(próximo estado) 
  // e usaremos o useState para mudar o estado do contador.
  // função increment é criado para usar o setcontador e atualizando o contador dentro dele.
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        {/* ------------------------------------------------------ */}
        <h1>Roteamento</h1>
        <Link to="/cadastro"><button>Acessar cadastro</button></Link>
        {/* ------------------------------------------------------ */}
        <Header title="contador" />
        <input type="button" value="Clique" onClick={increment} /> 
        <p className='contador'>{contador} cliques!</p>
        {/* ------------------------------------------------------ */}
        <Header />
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

export default Home;