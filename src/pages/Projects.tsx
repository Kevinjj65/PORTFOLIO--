import React from 'react';

const Projects: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url(/assets/earth.jpg)' }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col items-center p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Poppins'] mb-4 text-center">Projects</h1>

        <div className="w-full h-full overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {/* First Project Box */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[300px] h-[300px] mx-auto">
              <div className="h-1/2">
                <img 
                  src="/assets/jy.jpg" 
                  alt="Project Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-['Poppins']">CHORUS</h3>
                <p className="text-sm text-gray-600 font-['Poppins']">
                  A group project for a Jesus Youth Event conducted on Rajagiri School Of Engineering and Technology
                </p>
              </div>
            </div>

            {/* Second Project Box */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[300px] h-[300px] mx-auto">
              <div className="h-1/2">
                <img 
                  src="/assets/gu.png" 
                  alt="Project Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-['Poppins']">GREEN UP</h3>
                <p className="text-sm text-gray-600 font-['Poppins']">
                  A webapp on environment waste management that promotes community engagement by reward based participation.
                </p>
              </div>
            </div>

            {/* Third Project Box */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[300px] h-[300px] mx-auto">
              <div className="h-1/2">
                <img 
                  src="/assets/vitalis.svg" 
                  alt="Project Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-['Poppins']">VITALIS</h3>
                <p className="text-sm text-gray-600 font-['Poppins']">
                  A disaster management project created to function well at a time of distress.
                </p>
              </div>
            </div>

            {/* Fourth Project Box */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[300px] h-[300px] mx-auto">
              <div className="h-1/2">
                <img 
                  src="/assets/toyai.svg" 
                  alt="Project Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-['Poppins']">TOY.AI</h3>
                <p className="text-sm text-gray-600 font-['Poppins']">
                  An AI-powered toy recommendation system that suggests personalized toys based on child's age and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
