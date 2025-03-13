import React, { useState } from 'react';

const Addconta = ({ onAdd }) => {
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAdd = () => {
    const valorFloat = parseFloat(valor);
    if (isNaN(valorFloat) || data === '' || descricao.trim() === '') {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    onAdd({ valor: valorFloat, data, descricao });
    setValor('');
    setData('');
    setDescricao('');
  };

  return (
    <div>
      <h2>Adcionar Despesas</h2>
      <input
        type="number"
        id="valor"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <input
        type="date"
        id="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <input
        type="text"
        id="descricao"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default Addconta;