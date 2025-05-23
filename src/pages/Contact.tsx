import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CloseIcon from '@mui/icons-material/Close';
import Parse from '../parseConfig'; 

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageObj = new Parse.Object('Messages');
    messageObj.set('name', name);
    messageObj.set('email', email);
    messageObj.set('message', message);

    try {
      await messageObj.save();
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setShowModal(false);
    } catch (error: any) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url(/assets/contactgif.gif)' }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col items-center p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Poppins'] mb-4 text-center">Contact</h1>
        
        <div className="w-full h-full overflow-y-auto pr-2">
          <div className="space-y-8">
            <div className="bg-gray-50/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 font-['Poppins'] text-center">Get in Touch</h2>
              <p className="text-gray-600 mb-8 font-['Poppins'] text-center">
                Feel free to reach out to me through any of the following platforms.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a 
                  href="https://github.com/Kevinjj65" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <GitHubIcon className="text-3xl" />
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/kevin-johns-jolly-02b668274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <LinkedInIcon className="text-3xl" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://instagram.com/_kev.yn_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <InstagramIcon className="text-3xl" />
                  <span>Instagram</span>
                </a>

                <a 
                  href="mailto:kevinjohnsjolly.com" 
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <EmailIcon className="text-3xl" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-['Poppins'] flex items-center space-x-2"
              >
                <MarkEmailReadIcon />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold font-['Poppins']">Send Message</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <CloseIcon />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-['Poppins']">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-['Poppins']">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-['Poppins']">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-['Poppins']"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
