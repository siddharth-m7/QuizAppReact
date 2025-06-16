import React from "react";

// About Project Component
function AboutProject() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About QuizHub</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Empowering Learning Through Interactive Quizzes
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              QuizHub represents a modern approach to educational assessment and learning reinforcement. 
              Built with cutting-edge web technologies, this platform transforms the traditional quiz 
              experience into an engaging, interactive journey that adapts to diverse learning styles 
              and educational requirements.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              The application leverages the power of React for dynamic user interfaces, ensuring 
              seamless interaction and real-time feedback. Tailwind CSS provides the foundation 
              for responsive design that delivers consistent experiences across all device types, 
              while React Router enables smooth navigation throughout the platform.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-800 mb-3">Core Features</h4>
              <p className="text-gray-600">
                Dynamic quiz generation, responsive design architecture, intuitive user interface, 
                and seamless navigation create an optimal learning environment that encourages 
                knowledge retention and skill development.
              </p>
            </div>
          </div>
          
          {/* Technology Stack Visual */}
          <div className="lg:order-last">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Built With Modern Technologies
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">React</h5>
                    <p className="text-sm text-gray-600">Component-based UI library</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Tailwind CSS</h5>
                    <p className="text-sm text-gray-600">Utility-first CSS framework</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">RR</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">React Router</h5>
                    <p className="text-sm text-gray-600">Declarative routing solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;