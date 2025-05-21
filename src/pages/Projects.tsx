import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="h-screen flex">
      {/* Left side - Project boxes */}
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-start pt-20">
        <h1 className="text-4xl font-bold mb-12 font-['Poppins']">Projects</h1>
        
        <div className="space-y-7 w-full max-w-md px-6">
          {/* First Project Box */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video">
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
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-100">
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
        </div>
      </div>

      {/* Right side - Earth background */}
      <div className="w-1/2 h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/public/assets/earth.jpg)' }}
        />
      </div>
    </div>
  );
};

export default Projects; 