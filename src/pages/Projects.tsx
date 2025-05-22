import React from 'react';

const Projects: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url(/assets/earth.jpg)' }}
    >
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-6 md:p-12 w-full max-w-6xl min-h-[75vh] flex flex-col justify-start items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 font-['Poppins'] text-center">
          Projects
        </h1>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          {/* First Project Box */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full md:w-1/2">
            <div className="h-40">
              <img 
                src="/assets/jy.jpg" 
                alt="Project Image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-1 font-['Poppins']">CHORUS</h3>
              <p className="text-sm text-gray-600 font-['Poppins']">
                A group project for a Jesus Youth Event conducted on Rajagiri School Of Engineering and Technology
              </p>
            </div>
          </div>

          {/* Second Project Box */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full md:w-1/2">
            <div className="h-40">
              <img 
                src="/assets/gu.png" 
                alt="Project Image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-1 font-['Poppins']">GREEN UP</h3>
              <p className="text-sm text-gray-600 font-['Poppins']">
                A webapp on environment waste management that promotes community engagement by reward based participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
