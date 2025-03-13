import React from 'react';

const Menu = ({ onSelect }) => {
  return (
    <nav>
      <button onClick={() => onSelect('add')}>Adicionar</button>
      <button onClick={() => onSelect('view')}>Visualizar</button>
    </nav>
  );
};

export default Menu;