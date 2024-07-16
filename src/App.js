import './App.css';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [aptosSalvos, setAptosSalvos] = useState([]);
  const [aptoSelecionado, setAptoSelecionado] = useState({});

  const setPromocao = (apto) => {
    if(!apto.temPromocao) return 'Sem';
    if(apto.preco < 1000) return 'Normal';
    if(apto.preco < 5000) return 'Plus';
    else return 'Super';
  } 

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' placeholder='Numero' onChange={e => setAptoSelecionado(apto => {
          return {
            ...apto,
            ...{ numero: e.target.value }
          }
        })}></input>
        <input type='text' placeholder='Preço' onChange={e => setAptoSelecionado(apto => {
          return {
            ...apto,
            ...{ preco: e.target.value }
          }
        })}></input>
        <button style={{height: 40, width: 100}} onClick={() => {
          setAptosSalvos(aptos => {
            return [ ...aptos, { ...aptoSelecionado, ...{ promocao: setPromocao(aptoSelecionado) } } ]
          })
        }}>Salvar</button>
        <input type='checkbox' onChange={e => setAptoSelecionado(apto => {
          return { 
            ...apto,
            ...{ temPromocao: e.target.checked }
           }
        })}></input>
        <div style={{display: 'flex'}}>
          {
            aptosSalvos.map((apto, index) => 
              <Display key={index} apto={apto} />
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
