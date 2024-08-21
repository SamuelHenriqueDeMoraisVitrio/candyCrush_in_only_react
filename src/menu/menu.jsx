import { useState } from 'react'
import App from '../game/App.jsx'
import './menu.css'

function Menu(){
  const [isGameVisible, setIsGameVisible] = useState(false);

  const handleStartGame = () => {
    setIsGameVisible(true);
  };

  return (
    <>
    <div>
      {!isGameVisible ? (
        <div class="menu-container">
          <h1>Bem-vindo ao Jogo!</h1>
          <button onClick={handleStartGame}>Iniciar Jogo</button>
          <button >Configurações</button>
          <button >Sair</button>
        </div>
      ) : (
        <App />
      )}
    </div>
    </>
  );
}

export default Menu;
