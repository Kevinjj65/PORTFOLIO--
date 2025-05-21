import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center py-24">
      <div className="max-w-4xl w-full mx-auto px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-8 font-['Poppins'] text-center">Contact</h1>
          <div className="space-y-8">
            <div className="bg-gray-50/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 font-['Poppins'] text-center">Get in Touch</h2>
              <p className="text-gray-600 mb-8 font-['Poppins'] text-center">
                Feel free to reach out to me through any of the following platforms.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <GitHubIcon className="text-3xl" />
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <LinkedInIcon className="text-3xl" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <InstagramIcon className="text-3xl" />
                  <span>Instagram</span>
                </a>

                <a 
                  href="mailto:your.email@example.com" 
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <EmailIcon className="text-3xl" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50/50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4 font-['Poppins']">Location</h2>
              <p className="text-gray-600 font-['Poppins']">
                Based in Kerala, India<br />
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 