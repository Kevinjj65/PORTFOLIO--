import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    'Frontend Development': [
      { name: 'React', level: 'Advanced' },
      { name: 'Redux', level: 'Advanced' },
      { name: 'Redux Saga', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' }
    ],
    'Backend & Database': [
      { name: 'Supabase', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' }
    ],
    'Programming Languages': [
      { name: 'Python', level: 'Advanced' },
      { name: 'C', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' }
    ],
    'AI & Machine Learning': [
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'Deep Learning', level: 'Intermediate' }
    ]
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Content */}
      <div className="w-1/2 h-full bg-white flex flex-col items-center justify-start pt-20">
        <h1 className="text-4xl font-bold mb-12 font-['Poppins']">Skills</h1>
        
        <div className="w-full max-w-2xl px-8 space-y-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 font-['Poppins'] text-gray-800">{category}</h2>
              <div className="grid grid-cols-2 gap-4">
                {skillList.map((skill) => (
                  <div 
                    key={skill.name}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-medium font-['Poppins'] text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-blue-600 font-['Poppins']">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Air background */}
      <div className="w-1/2 h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/src/assets/air.jpg)' }}
        />
      </div>
    </div>
  );
};

export default Skills; 