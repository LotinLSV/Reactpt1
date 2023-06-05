import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function formulario(){
  return(
        <div className="box-form">
    <form className="formulario-t">
      <label id="Login" for="txtLogin">Login:</label>
      <br></br>
      <input  type="text" placeholder="usuário" id="txtLogin"></input>
      <br></br>
      <label id="password">Senha:</label>
      <br></br>
      <input type="password" placeholder="Senha" id="txtSenha"></input>
      <br></br>
      <button  id="bt-submit" type="submit" for="formulario-t">Entrar</button>

    </form>
    </div>
    
  );
}

const valorFundo = document.querySelector('body')
const valorFormlario = document.querySelector('form')
const mudaFundo = (valorFormulario.style.display === 'block', valorFundo.style.backgroundColor= 'white': ~valorFundo.style.backgroundColor = "rgba(0, 0, 0, 0.7)")


export default formulario;
// export default App;
