import React, { useState } from 'react';
import { BookOpen, ShoppingCart, Users } from 'lucide-react';

function Infro() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButton = () => {
    const randomX = Math.random() * 60 + 20; // Limits movement (20% - 80%)
    const randomY = Math.random() * 60 + 20; // Limits movement (20% - 80%)

    setPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  return (
    <div className="px-4">
      <section className="bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 text-white flex items-center px-6 md:px-20 pt-28 sm:pt-48 pb-28 sm:pb-48">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-10">
          
          {/* Left Content */}
          <div className="md:w-3/5">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Welcome to Our Bookstore 📚
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-xl sm:text-xl leading-relaxed opacity-90">
              Discover a world of books where stories come to life! Whether you're a fiction lover, a non-fiction enthusiast, or a student searching for academic resources, we have something for everyone. 📖✨
            </p>

            {/* Features */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="text-yellow-400 w-7 h-7" />
                <p className="text-xl">Over <strong>10,000+</strong> Books in Multiple Genres</p>
              </div>
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-yellow-400 w-7 h-7" />
                <p className="text-xl">Easy & Secure <strong>Online Shopping</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-yellow-400 w-7 h-7" />
                <p className="text-xl">A Thriving <strong>Community of Readers</strong></p>
              </div>
            </div>

            {/* Moving Button */}
            <div className="mt-8 relative h-[150px]">
              <button
                onMouseEnter={moveButton}
                className="bg-yellow-400 text-blue-900 px-6 py-3 font-bold rounded-lg text-lg shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: position.top,
                  left: position.left,
                }}
              >
               Raise Complaint
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="md:w-2/5">
            <div className="sm:pl-6">
              <img
                src="https://media.newyorker.com/photos/67053f60179508e1d63cf188/master/w_1000,c_limit/r45104.jpg"
                alt="Bookstore"
                className="rounded-lg w-[500px] shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Infro;
