import React from 'react';

const Skills = () => {
  return (
    <div
      className="skills-container relative mx-auto p-8 md:p-12 rounded-2xl shadow-lg max-w-5xl transform hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: "url('https://example.com/skills-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 md:p-12 rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 text-white tracking-wider">
          Technical Skills & Interests
        </h2>

        <div className="skills-section grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-white">
          {/* Technical Skills Section */}
          <div className="skill-category bg-gradient-to-br from-blue-700 to-green-500 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Technical Skills</h3>
            <div className="space-y-2 md:space-y-3 text-lg">
              <p>
                <span className="font-semibold">Languages:</span> C++, Java,
                Python, JavaScript
              </p>
              <p>
                <span className="font-semibold">Developer Tools:</span> Git,
                GitHub, GitHub Desktop, Postman, Debugger
              </p>
              <p>
                <span className="font-semibold">Frameworks:</span> HTML, CSS,
                ReactJS, NextJS, Context API
              </p>
              <p>
                <span className="font-semibold">Cloud/Databases:</span> MySQL,
                MongoDB, Firebase
              </p>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="skill-category bg-gradient-to-br from-purple-600 to-pink-500 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Soft Skills</h3>
            <p className="text-lg">
              Time Management, Communication, Adaptability, Problem-solving,
              Teamwork, Leadership, Work Ethic
            </p>
          </div>

          {/* Coursework Section */}
          <div className="skill-category bg-gradient-to-br from-yellow-500 to-orange-600 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Coursework</h3>
            <p className="text-lg">
              Introduction to Programming, Data Structures, Object-Oriented
              Programming, Analysis and Design of Algorithms, Operating Systems,
              Database Management Systems, Computer Networks
            </p>
          </div>

          {/* Areas of Interest Section */}
          <div className="skill-category bg-gradient-to-br from-teal-500 to-blue-600 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Areas of Interest</h3>
            <p className="text-lg">
              DSA, Competitive Programming, Web Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
