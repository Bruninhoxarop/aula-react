import './App.css';
import Header from './Header';
import Produto from './Produto'

function App() {
  var x = "variável";
  return (
    <div className="App">
      <header className="App-header">
        <Header title={x}/>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <Header title="texto puro"/>
      </header>
      <div className='div'>
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
