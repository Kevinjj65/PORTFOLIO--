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

                {/* NEW Button to Trigger Modal */}
                <button
                  onClick={() => setShowModal(true)}
                  className="col-span-2 flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-['Poppins'] p-4 rounded-lg hover:bg-gray-100"
                >
                  <MarkEmailReadIcon className="text-3xl" />
                  <span>Type in any query here</span>
                </button>
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

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <CloseIcon />
            </button>
            <h2 className="text-2xl font-semibold mb-4 font-['Poppins'] text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 font-['Poppins']">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
