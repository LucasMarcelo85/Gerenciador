import React, { useState } from 'react';
import './App.css';
import Menu from './assets/Component/Menu';
import Addconta from './assets/Component/addconta';
import Dados from './assets/Component/Dados';
import Ganhos from './assets/Component/Ganhos';
import ListaGanhos from './assets/Component/ListaGanhos';

function App() {
  const [contas, setContas] = useState([]);
  const [ganhos, setGanhos] = useState([]);
  const [view, setView] = useState('add'); // Estado para controlar a visualização atual

  const handleAddConta = (conta) => {
    setContas([...contas, conta]);
  };

  const handleAddGanho = (ganho) => {
    setGanhos([...ganhos, ganho]);
  };

  const handleSelectView = (view) => {
    setView(view);
  };

  return (
    <>
      <h1>Gerenciador</h1>
      <Menu onSelect={handleSelectView} />
      {view === 'add' ? (
        <>
          <Addconta onAdd={handleAddConta} />
          <Ganhos onAdd={handleAddGanho} />
        </>
      ) : (
        <>
          <Dados contas={contas} />
          <ListaGanhos ganhos={ganhos} />
        </>
      )}
    </>
  );
}

export default App;