import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FullPageScrollWrapper from './components/FullPageScrollWrapper';
import { MenuProvider } from './context/MenuContext';
import DraggableMenu from './components/DraggableMenu';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <MenuProvider>
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <FullPageScrollWrapper />
            <DraggableMenu />
          </>
        )}
      </MenuProvider>
    </Router>
  );
};

export default App;
