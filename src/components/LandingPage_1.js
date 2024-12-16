import React from "react";
import { FaHeartbeat, FaShieldAlt, FaUserMd } from "react-icons/fa";
import NavBar from "./NavBar";


function LandingPage() {
  return (
    <div>
       <NavBar></NavBar>
    <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white font-sans min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Smart Health Blockchain System
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Empowering Bangladesh with secure, efficient, and transparent health
          monitoring and management. A future where healthcare meets innovation.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg">
          Learn More
        </button>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 p-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-72">
          <div className="text-5xl text-green-500 mb-4">
            <FaHeartbeat />
          </div>
          <h3 className="text-xl font-bold">Health Monitoring</h3>
          <p className="text-center text-sm mt-2">
            Real-time health data tracking for individuals and families, ensuring
            a healthier tomorrow.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-72">
          <div className="text-5xl text-blue-500 mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-bold">Data Security</h3>
          <p className="text-center text-sm mt-2">
            Blockchain-powered secure data storage that guarantees transparency
            and privacy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-72">
          <div className="text-5xl text-purple-500 mb-4">
            <FaUserMd />
          </div>
          <h3 className="text-xl font-bold">Better Healthcare</h3>
          <p className="text-center text-sm mt-2">
            Connecting patients with doctors seamlessly for improved healthcare
            delivery.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-800 py-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Join the Healthcare Revolution
        </h2>
        <p className="text-md md:text-lg mt-4 max-w-2xl mx-auto">
          Together, let's build a healthier and smarter Bangladesh. Start your
          journey with us today.
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
