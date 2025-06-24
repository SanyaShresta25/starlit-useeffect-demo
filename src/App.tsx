import { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import SpaceBackground from './components/SpaceBackground';
import WelcomeCard from './components/WelcomeCard';

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const [appMounted, setAppMounted] = useState(false);
  const isFirstRender = useRef(true);
  // Basically, when the App component mounts for the first time, log the mount time
  //  // and set the appMounted state to true.
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] App MOUNTED - Main application started`);
    setAppMounted(true);

    return () => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`[${timestamp}] App UNMOUNTED - Main application ended`);
    };
  }, []);
// After the first render, every re-render logs an update message with the time.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`[${timestamp}] App UPDATED - Re-render occurred`);
    }
  });
//whenever the showCard state changes, I log whether the welcome card is visible or hidden.
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    if (showCard) {
      console.log(`[${timestamp}] App STATE: Welcome card is now VISIBLE`);
    } else {
      console.log(`[${timestamp}] App STATE: Welcome card is now HIDDEN`);
    }
  }, [showCard]);

  const handleShow = () => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] USER ACTION: Show button clicked`);
    setShowCard(true);
  };

  const handleHide = () => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] USER ACTION: Hide button clicked`);
    setShowCard(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />

      <div className="relative z-10 min-h-screen flex flex-col px-4 sm:px-6">
        <div className="text-center py-10 sm:py-12 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-audiowide font-normal text-white mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Space Explorer
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-audiowide text-gray-300 mb-6 max-w-xl mx-auto">
            Experience the cosmic journey with lifecycle-aware components
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-10">
          <Button onClick={handleShow} variant="primary" disabled={showCard}>
            Show Welcome Card
          </Button>
          <Button onClick={handleHide} variant="secondary" disabled={!showCard}>
            Hide Welcome Card
          </Button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {showCard ? (
            <WelcomeCard />
          ) : (
            <div className="text-center text-gray-400 p-6 sm:p-8 max-w-md">
              
              <p className="text-base sm:text-lg">
                Click "Show Welcome Card" to begin your cosmic journey!
              </p>
              <div className="text-xs sm:text-sm mt-4 opacity-70">
                Check the console to see component lifecycle logs.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
