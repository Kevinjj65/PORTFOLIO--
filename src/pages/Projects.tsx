import React from 'react';

const Projects: React.FC = () => {
  // Array of your projects
  const projectList = [
    {
      imgSrc: "/assets/jy.jpg",
      title: "CHORUS",
      description: "A group project for a Jesus Youth Event conducted on Rajagiri School Of Engineering and Technology",
      bgColor: "bg-white"
    },
    {
      imgSrc: "/assets/gu.png",
      title: "GREEN UP",
      description: "A webapp on environment waste management that promotes community engagement by reward based participation.",
      bgColor: "bg-white"
    },
    {
      imgSrc: "/assets/vitalis.svg",
      title: "VITALIS",
      description: "A disaster management project created to function well at a time of distress.",
      bgColor: "bg-white"
    },
    {
      imgSrc: "/assets/toyai.svg",
      title: "TOY.AI",
      description: "An AI-powered toy recommendation system that suggests personalized toys based on child's age and interests.",
      bgColor: "bg-white"
    },
    {
      imgSrc: "/assets/wastepredictor.png",
      title: "WASTE PREDICTOR",
      description: "A machine learning model that predicts waste generation for better management.",
      bgColor: "bg-black"
    },
    {
      imgSrc: "/assets/news.png",
      title: "NEWSXPRESS",
      description: "A Telegram bot that delivers the latest news updates directly to your chat.",
      bgColor: "bg-black"
    },
    {
      imgSrc: "/assets/inception.png",
      title: "INCEPTION",
      description: "A dream journal application to help you record, track, and analyze your dreams.",
      bgColor: "bg-black"
    },
    {
      imgSrc: "/assets/caura.png",
      title: "CAURA",
      description: "A conceptual logo and identity for a decentralized blockchain platform.",
      bgColor: "bg-black"
    }
  ];

  // Duplicate the list for the seamless scroll effect
  const duplicatedProjects = [...projectList, ...projectList];

  return (
    <>
      <style>
        {`
          /* Keyframe for horizontal scrolling */
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Faster 25s animation */
          .animate-scroll-horizontal {
            animation: scroll-horizontal 25s linear infinite;
          }

          /* Pause animation on hover */
          .group:hover .animate-scroll-horizontal {
            animation-play-state: paused;
          }
        `}
      </style>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: 'url(/assets/earth.jpg)' }}
      >
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col items-center p-4 sm:p-6">
          <h1 className="text-3xl sm:text-4xl font-bold font-['Poppins'] mb-4 text-center">Projects</h1>

          {/* This outer div will hide the overflowing content and act as the hover group */}
          <div className="w-full h-full overflow-hidden relative group">
            {/* This div contains the duplicated items and applies the animation */}
            <div className="absolute top-0 left-0 flex items-center h-full animate-scroll-horizontal">
              {/* Using flexbox for horizontal layout */}
              <div className="flex items-center gap-6 px-3">
                {duplicatedProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden w-[300px] h-[300px] flex-shrink-0">
                    <div className={`h-1/2 flex items-center justify-center ${project.bgColor}`}>
                      <img
                        src={project.imgSrc}
                        alt="Project Image"
                        className="w-auto h-full object-contain p-2"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 font-['Poppins']">{project.title}</h3>
                      <p className="text-sm text-gray-600 font-['Poppins']">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;