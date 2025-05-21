import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FullPageScrollWrapper from './components/FullPageScrollWrapper';
import { MenuProvider } from './context/MenuContext';
import DraggableMenu from './components/DraggableMenu';

const App: React.FC = () => {
  return (
    <Router>
      <MenuProvider>
        <FullPageScrollWrapper />
        <DraggableMenu />
      </MenuProvider>
    </Router>
  );
};

export default App;
