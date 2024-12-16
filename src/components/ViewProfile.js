import React, { useState, useEffect } from "react";
import Web3 from "web3";
import PatientRegistry from "../build/contracts/PatientRegistry.json";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  const { address } = useParams();
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);

          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = PatientRegistry.networks[networkId];
          const contractInstance = new web3Instance.eth.Contract(
            PatientRegistry.abi,
            deployedNetwork && deployedNetwork.address
          );

          setContract(contractInstance);
        } catch (error) {
          console.error("User denied access to accounts.");
        }
      } else {
        console.log("Please install MetaMask extension");
      }
    };

    init();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!contract) return;
      setIsLoading(true);
      try {
        const patient = await contract.methods.patients(address).call();
        setProfile(patient);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [contract, address]);

  return (
    <div className="bg-gradient-to-b from-purple-500 to-purple-800 p-4 sm:p-10 font-mono text-yellow-300 h-screen flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Patient Profile</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <p className="text-xl mb-4">
            <strong>Name:</strong> {profile.name || "N/A"}
          </p>
          <p className="text-xl mb-4">
            <strong>Date of Birth:</strong> {profile.dateOfBirth || "N/A"}
          </p>
          <p className="text-xl mb-4">
            <strong>Home Address:</strong> {profile.homeAddress || "N/A"}
          </p>
          <p className="text-xl mb-4">
            <strong>Phone Number:</strong> {profile.phoneNumber || "N/A"}
          </p>
          <p className="text-xl mb-4">
            <strong>Gender:</strong> {profile.gender || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
