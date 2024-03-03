import React from 'react';

const NavTabWindow = ({ isWindowOpen }) => {
    
  const handleClose = () => {
    const windowEl = document.querySelector('.nav-tab-window');
    windowEl.classList.remove('nav-tab-window__isopen');
  };

  return (
    <div className={`nav-tab-window ${isWindowOpen ? 'nav-tab-window__isopen' : ''}`}>
      <button onClick={handleClose}>Закрыть</button>
      <button>Навигация 1</button>
      <button>Навигация 2</button>
      <button>Навигация 3</button>
    </div>
  );
};

export default NavTabWindow;