import React from "react";
import Addconta from "./addconta";
import Dados from "./Dados";

function Resultado() {
  return (
    <>
    <h2>Lista de Contas</h2>
        <table>
            <thead>
                <tr>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody id="lista-contas"></tbody>
        </table>
        <h3>Total: R$ <span id="total">0.00</span></h3>
    </>
  );
}
export default Resultado;