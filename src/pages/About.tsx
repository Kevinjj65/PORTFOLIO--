import React from 'react';

const About: React.FC = () => {
  return (
    <div className="h-screen flex">
      {/* Left side - Fire background */}
      <div className="w-1/2 h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/fire.jpg)' }}
        />
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="max-w-2xl px-8">
          <h1 className="text-4xl font-bold mb-8 font-['Poppins']">👨‍💻 About Me</h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 font-['Poppins']">
              Hey there! I'm <span className="font-bold">Kevin Johns Jolly</span>, a passionate and driven <span className="font-bold">Full Stack Developer</span> with a deep enthusiasm for <span className="font-bold">Machine Learning</span> 🤖. I enjoy crafting seamless user experiences from front to back, while also diving into the fascinating world of data and intelligent systems.
            </p>
            <p className="text-lg text-gray-600 font-['Poppins']">
              Whether it's building web applications that are both aesthetic and functional, or exploring the predictive power of machine learning models, I thrive on learning and creating meaningful solutions. I believe in writing clean, efficient code and continuously evolving my skills to stay ahead in the tech world 💡.
            </p>
            <p className="text-lg text-gray-600 font-['Poppins']">
              Let's build something awesome together! 🚀
            </p>

            <div className="mt-8 space-y-4">
          
              
              <div className="space-y-3">
                <p className="text-lg text-gray-600 font-['Poppins']">
                  <span className="font-bold">📍 Location:</span> Muvattupuzha, Kerala, India
                </p>
                <p className="text-lg text-gray-600 font-['Poppins']">
                  <span className="font-bold">🎓 Education:</span> 3rd Year Undergraduate in Computer Science and Engineering
                </p>
                <p className="text-lg text-gray-600 font-['Poppins']">
                  <span className="font-bold">🧑‍🎓 Degree:</span> B.Tech in Computer Science and Engineering
                </p>
                <p className="text-lg text-gray-600 font-['Poppins']">
                  <span className="font-bold">🎯 Expected Graduation:</span> 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
