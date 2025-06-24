import { useEffect, useState } from 'react';

const WelcomeCard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => console.log('Unmounted');
  }, []);

  return (
    <div className="flex items-center justify-center py-8 px-2 sm:px-4 animate-fadeIn">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transform transition-all duration-700 hover:scale-105">
        <div
          className="relative rounded-3xl p-5 shadow-2xl border border-purple-500/40 overflow-hidden min-h-[340px] sm:min-h-[360px] md:min-h-[400px] bg-black/60"
          style={{
            backgroundImage: "url('/assets/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/10 to-blue-700/10 animate-pulse rounded-3xl"></div>

          {/* Decorative Images */}
          <img
            src="/assets/images/planet1.png"
            alt="Planet 1"
            className="absolute -top-8 -left-8 w-20 sm:w-24 md:w-28 lg:w-32 z-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 transition-transform animate-pulse-soft"
          />
          <img
            src="/assets/images/planet2.png"
            alt="Planet 2"
            className="absolute top-1/2 right-0 w-20 sm:w-24 md:w-28 lg:w-32 transform -translate-y-1/2 opacity-80 z-10 animate-pulse-soft drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 transition-transform"
          />
          <img
            src="/assets/images/planet3.png"
            alt="Planet 3"
            className="absolute -bottom-8 -left-6 w-24 sm:w-28 md:w-36 lg:w-40 opacity-85 z-10 animate-pulse-soft drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 transition-transform"
          />
          <img
            src="/assets/images/astronaut-lying.png"
            alt="Astronaut Lying"
            className="absolute bottom-4 left-6 w-16 sm:w-20 md:w-24 z-20 animate-fadeIn drop-shadow"
          />

          {/* Text and Lifecycle */}
          <div className="relative z-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Welcome to
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Our Galaxy!
            </h2>

            <div className="mb-6 p-4 bg-black/30 rounded-xl border border-purple-500/20 backdrop-blur">
              <p className="text-purple-200 text-xs sm:text-sm mb-2">Component Lifecycle Status:</p>
              {mounted && (
                <div className="text-xs sm:text-sm text-green-300 font-semibold animate-fadeIn">
                  Mounted
                </div>
              )}
            </div>

            {/* Spinner */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 border border-purple-500/20 rounded-full animate-spin-slow"
                style={{ animationDuration: '20s' }}
              ></div>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
