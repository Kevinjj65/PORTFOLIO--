import React from 'react';

const About: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url(/assets/fire.jpg)' }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col items-center p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Poppins'] mb-4 text-center">
          👨‍💻 About Me
        </h1>

        <div className="w-full h-full overflow-y-auto pr-2">
          <div className="space-y-6 text-left">
            <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
              Hey there! I'm <span className="font-bold">Kevin Johns Jolly</span>, a passionate and driven <span className="font-bold">Full Stack Developer</span> with a deep enthusiasm for <span className="font-bold">Machine Learning</span> 🤖. I enjoy crafting seamless user experiences from front to back, while also diving into the fascinating world of data and intelligent systems.
            </p>

            <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
              Whether it's building web applications that are both aesthetic and functional, or exploring the predictive power of machine learning models, I thrive on learning and creating meaningful solutions. I believe in writing clean, efficient code and continuously evolving my skills to stay ahead in the tech world 💡.
            </p>

            <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
              Let's build something awesome together! 🚀
            </p>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
                <span className="font-bold">📍 Location:</span> Muvattupuzha, Kerala, India
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
                <span className="font-bold">🎓 Education:</span> 3rd Year Undergraduate in Computer Science and Engineering
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
                <span className="font-bold">🧑‍🎓 Degree:</span> B.Tech in Computer Science and Engineering
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-['Poppins']">
                <span className="font-bold">🎯 Expected Graduation:</span> 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
