import React, { useState } from "react";
import Web3 from "web3";
import DoctorRegistration from "../build/contracts/DoctorRegistration.json";
import "../CSS/DoctorRegistration.css";

const DoctorRegistrationForm = () => {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [bmdcNumber, setbmdcNumber] = useState("");

  const hospitalOptions = [
    "Dhaka Medical College Hospital",
    "Bangabandhu Sheikh Mujib Medical University",
    "Square Hospital",
    "United Hospital",
    "Apollo Hospital Dhaka",
    "Ibn Sina Hospital",
    "Others",
  ];

  const specializationOptions = [
    "General Physician",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Gynecology",
    "Pediatrics",
    "Dermatology",
    "Others",
  ];

  const departmentOptions = [
    "Emergency",
    "Surgery",
    "Outpatient",
    "Inpatient",
    "Pharmacy",
    "Radiology",
    "Pathology",
    "Others",
  ];

  const designationOptions = [
    "Intern",
    "Resident",
    "Consultant",
    "Specialist",
    "Senior Consultant",
    "Professor",
    "Others",
  ];

  const handleRegister = async () => {
    if (
      !doctorAddress ||
      !doctorName ||
      !hospitalName ||
      !dateOfBirth ||
      !gender ||
      !phoneNumber ||
      !specialization ||
      !department ||
      !designation ||
      !bmdcNumber
    ) {
      alert(
        "You have missing input fields. Please fill in all the required fields."
      );
      return;
    }

    if (phoneNumber.length !== 11) {
      alert(
        "You have entered a wrong phone number. Please enter an 11-digit phone number."
      );
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);

      const networkId = await web3.eth.net.getId();

      const contract = new web3.eth.Contract(
        DoctorRegistration.abi,
        DoctorRegistration.networks[networkId].address
      );

      const datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      if (!datePattern.test(dateOfBirth)) {
        alert("Please enter Date of Birth in the format dd/mm/yyyy");
        return;
      }

      const isRegDoc = await contract.methods
        .isRegisteredDoctor(doctorAddress)
        .call();

      if (isRegDoc) {
        alert("Doctor already exists");
        return;
      }

      await contract.methods
        .registerDoctor(
          doctorAddress,
          doctorName,
          hospitalName,
          dateOfBirth,
          gender,
          phoneNumber,
          specialization,
          department,
          designation,
          bmdcNumber
        )
        .send({ from: doctorAddress });

      alert("Doctor registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the doctor.");
    }
  };

  return (
    <div className="createehr min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-indigo-500 to-indigo-900 font-mono">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl text-white mb-6 font-bold text-center">
          Doctor Registration
        </h2>
        <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="doctorAddress"
            >
              Doctor Address:
            </label>
            <input
              type="text"
              id="doctorAddress"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={doctorAddress}
              onChange={(e) => setDoctorAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="doctorName"
            >
              Doctor Name:
            </label>
            <input
              type="text"
              id="doctorName"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="hospitalName"
            >
              Hospital Name:
            </label>
            <select
              id="hospitalName"
              className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
            >
              <option value="">Select Hospital</option>
              {hospitalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="dateOfBirth"
            >
              Date of Birth (dd/mm/yyyy):
            </label>
            <input
              type="text"
              id="dateOfBirth"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-yellow-300" htmlFor="gender">
              Gender:
            </label>
            <input
              type="text"
              id="gender"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="specialization"
            >
              Specialization:
            </label>
            <select
              id="specialization"
              className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Select Specialization</option>
              {specializationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="department"
            >
              Department:
            </label>
            <select
              id="department"
              className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              {departmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="designation"
            >
              Designation:
            </label>
            <select
              id="designation"
              className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              {designationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold text-yellow-300"
              htmlFor="bmdcNumber"
            >
              BMDC Number:
            </label>
            <input
              type="text"
              id="bmdcNumber"
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md"
              value={bmdcNumber}
              onChange={(e) => setbmdcNumber(e.target.value)}
            />
          </div>
        </form>
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleRegister}
            className="py-3 px-4 bg-teal-500 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Register Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm;
