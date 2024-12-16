import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import DoctorRegistration from "../build/contracts/DoctorRegistration.json";

const ViewDoctorProfile = () => {
  const { address } = useParams();
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const contract = new web3.eth.Contract(
          DoctorRegistration.abi,
          DoctorRegistration.networks[networkId].address
        );

        const doctorDetails = await contract.methods
          .getDoctorDetails(address)
          .call();

        setDoctorProfile(doctorDetails);
      } catch (err) {
        console.error(err);
        setError("Failed to load the doctor's profile. Please try again.");
      }
    };

    fetchDoctorProfile();
  }, [address]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!doctorProfile) {
    return <p className="text-white text-center">Loading profile...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-purple-500 to-purple-800 p-4 sm:p-10 font-mono text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6">
        Doctor Profile
      </h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Name:</strong>{" "}
          {doctorProfile.doctorName}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Hospital:</strong>{" "}
          {doctorProfile.hospitalName}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Date of Birth:</strong>{" "}
          {doctorProfile.dateOfBirth}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Gender:</strong>{" "}
          {doctorProfile.gender}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Phone Number:</strong>{" "}
          {doctorProfile.phoneNumber}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Specialization:</strong>{" "}
          {doctorProfile.specialization}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Department:</strong>{" "}
          {doctorProfile.department}
        </p>
        <p className="text-lg mb-4">
          <strong className="text-yellow-300">Designation:</strong>{" "}
          {doctorProfile.designation}
        </p>
        <p className="text-lg">
          <strong className="text-yellow-300">BMDC Number:</strong>{" "}
          {doctorProfile.bmdcNumber}
        </p>
      </div>
    </div>
  );
};

export default ViewDoctorProfile;
