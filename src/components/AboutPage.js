import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Image Section */}

      {/* Main Content Section */}
      <div className="flex justify-center bg-gradient-to-b from-indigo-500 items-center min-h-screen">
        <div className="flex flex-col text-custom-blue space-y-8 w-3/5 p-8 bg-gray-800 shadow-lg rounded-lg transition-transform duration-1000 ease-in-out transform hover:scale-105">
          <div className="space-y-4">
            <h1 className="text-lg font-mono text-center text-yellow-300">
              About Us
            </h1>
            <div className="about-content text-left text-yellow-300">
              <b>
                Smart Health: Blockchain-Driven Health Monitoring and Management
                System{" "}
              </b>
              is an application of the health management system of Bangladesh
              using blockchain.
              <br />
              This was made for the course <b>CSE4250: Project/Thesis-II</b> of
              the Department of Computer Science and Engineering (CSE),
              Ahsanullah University of Science and Technology (AUST).
              <br />
              <br />
              <h2 className="font-semibold text-lg text-yellow-300">
                Team Members
              </h2>
              <table className="table-auto w-full mt-3">
                <tbody>
                  <tr>
                    <th className="text-left py-2 pr-4 text-yellow-300">
                      Supervisor
                    </th>
                    <td>
                      <b>Mr. Md. Khairul Hasan</b>
                      <br />
                      Associate Professor
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-2 pr-4 text-yellow-300">
                      Member
                    </th>
                    <td>
                      <b>Khaled Hasan</b>
                      <br />
                      Id: 20200104037
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-2 pr-4 text-yellow-300">
                      Member
                    </th>
                    <td>
                      <b>Md. Tahsin Islam Molla </b>
                      <br />
                      Id: 20200104054
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-2 pr-4 text-yellow-300">
                      Member
                    </th>
                    <td>
                      <b>Md.Abid Hossain Pias</b>
                      <br />
                      Id: 20200104066
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-2 pr-4 text-yellow-300">
                      Member
                    </th>
                    <td>
                      <b>Istehad Ahmed Rafi</b>
                      <br />
                      Id: 20200104077
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
