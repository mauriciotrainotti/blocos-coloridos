import './App.css';
import { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState(''); // Armazena a cor selecionada
  const [showSelectedColor, setShowSelectedColor] = useState(false); // Controla a visibilidade do botão
  const cores = {
    black: 'Preto',
    blue: 'Azul',
    green: 'Verde',
    red: 'Vermelho'
  }

  // Função que será chamada ao clicar nos botões
  const handleButtonClick = (color) => {
    setSelectedColor(color); // Define a cor selecionada
    setShowSelectedColor(true); // Exibe o botão de cor selecionada
  };

  return (
    <>
      <button id="botao-preto" onClick={() => handleButtonClick('black')}></button>
      <button id="botao-azul" onClick={() => handleButtonClick('blue')}></button>
      <button id="botao-verde" onClick={() => handleButtonClick('green')}></button>
      <button id="botao-vermelho" onClick={() => handleButtonClick('red')}></button>

      <h1>Cor Selecionada:</h1>
      {showSelectedColor && (
        <button
          id="cor-selecionada"
          style={{ 
            display: 'inline-block', 
            backgroundColor: selectedColor, 
            
          }}
        ></button>
        
      )}

        <h2>
        {cores[selectedColor]}
        </h2>
      





    </>
  );
}

export default App;
