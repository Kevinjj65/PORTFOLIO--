import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    'Frontend Development': [
      { name: 'React', level: 'Advanced' },
      { name: 'Redux', level: 'Intermediate'},
      { name: 'Redux Saga', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' }
    ],
    'Backend & Database': [
      { name: 'PostgreSQL', level: 'Intermediate' }
    ],
    'Services': [
      { name: 'Supabase', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' }
    ],
    'Programming Languages': [
      { name: 'Python', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Javascript', level: 'Intermediate' }
    ],
    'AI & Machine Learning': [
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'Deep Learning', level: 'Intermediate' }
    ]
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url(/assets/air.jpg)' }}
    >
      {/* Main Box */}
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-3xl h-[85vh] flex flex-col items-center p-4 sm:p-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold font-['Poppins'] mb-4 text-center">Skills</h1>

        {/* Scrollable Area */}
        <div className="w-full h-full overflow-y-auto pr-2 space-y-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white rounded-xl shadow-xl p-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-['Poppins'] text-gray-800">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillList.map((skill) => (
                  <div 
                    key={skill.name}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-base sm:text-lg font-medium font-['Poppins'] text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-blue-600 font-['Poppins']">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
