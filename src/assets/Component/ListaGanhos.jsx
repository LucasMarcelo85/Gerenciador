import React from 'react';

const ListaGanhos = ({ ganhos }) => {
  const total = ganhos.reduce((acc, ganho) => acc + ganho.valor, 0);

  return (
    <div>
      <h2>Ganhos</h2>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody id="lista-ganhos">
          {ganhos.map((ganho, index) => (
            <tr key={index}>
              <td>R$ {ganho.valor.toFixed(2)}</td>
              <td>{ganho.data}</td>
              <td>{ganho.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: R$ <span id="total-ganhos">{total.toFixed(2)}</span></p>
    </div>
  );
};

export default ListaGanhos;