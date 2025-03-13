import React from 'react';

const Dados = ({ contas }) => {
  const total = contas.reduce((acc, conta) => acc + conta.valor, 0);

  return (
    <div>
      <h2>Despesas</h2>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody id="lista-contas">
          {contas.map((conta, index) => (
            <tr key={index}>
              <td>R$ {conta.valor.toFixed(2)}</td>
              <td>{conta.data}</td>
              <td>{conta.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: R$ <span id="total">{total.toFixed(2)}</span></p>
    </div>
  );
};

export default Dados;