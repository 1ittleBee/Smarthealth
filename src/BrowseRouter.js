import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import PatientRegistration from "./components/PatientRegistration";
import LoginPage from "./components/LoginPage";
import PatientDashBoard from "./components/PatientDashBoard";
import DoctorDashBoard from "./components/DoctorDashBoard";
import CreateEhr from "./components/CreateEhr";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import ContractInteraction from "./components/ContractInteraction";
import RecordPermission from "./components/RecordPermission";
import DoctorPermission from "./components/DoctorPermission";
import DoctorLoginPage from "./components/DoctorLoginPage";
import PatientLogin from "./components/PatientLogin";
import DoctorRegistrationForm from "./components/DoctorRegistration";
import PatientWritePermission from "./components/PatientWritePermission";
import DoctorPermissionPage from "./components/DoctorPermissionPage";
import ContractInteractionDoctor from "./components/ContractInteractionDoctor";
import BookAppointment from "./components/BookAppointment";
import ViewAppointment from "./components/ViewAppointment";
import LandingPage_1 from "./components/LandingPage_1";
import AboutUs from "./components/AboutPage";
import ViewProfile from "./components/ViewProfile"; // Import the ViewProfile component
import ViewDoctorProfile from "./components/ViewDoctorProfile";

const BrowseRouter = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3Instance);

          const fetchedAccounts = await web3Instance.eth.getAccounts();
          setAccounts(fetchedAccounts);
        } catch (error) {
          console.error("User denied access to accounts:", error);
        }
      } else {
        console.log("Please install the MetaMask extension.");
      }
    };

    initWeb3();
  }, []);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LandingPage_1 />} />
        <Route path="/AboutPage" element={<AboutUs />} />
        <Route path="/register" element={<LandingPage />} />
        <Route
          path="/patient/:address/writepermission"
          element={<PatientWritePermission />}
        />
        <Route
          path="/patient_registration"
          element={<PatientRegistration />}
        />
        <Route
          path="/doctor_registration"
          element={<DoctorRegistrationForm />}
        />
        <Route path="/patient_login" element={<PatientLogin />} />
        <Route path="/doctor_login" element={<DoctorLoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient/:address" element={<PatientDashBoard />} />
        <Route path="/doctor/:address" element={<DoctorDashBoard />} />
        <Route
          path="/doctor/:address/createehr"
          element={<CreateEhr web3={web3} />}
        />
        <Route
          path="/patient/:address/viewrecord"
          element={<ContractInteraction />}
        />
        <Route
          path="/patient/:address/permissionstab"
          element={<RecordPermission />}
        />
        <Route
          path="/patient/:address/bookappointment"
          element={<BookAppointment />}
        />
        <Route
          path="/patient/:address/viewprofile"
          element={<ViewProfile />} // Add the new View Profile route
        />
        <Route
           path="/doctor/:address/viewprofile"
           element={<ViewDoctorProfile />}
         />;
        <Route path="/doctor/:address/viewrec" element={<DoctorPermission />} />
        <Route path="/doctor/:address/viewapp" element={<ViewAppointment />} />
        <Route
          path="/doctor/:address/viewrec/:patientaddress"
          element={<ContractInteractionDoctor />}
        />
        <Route
          path="/doctor/:address/doctorpermissionpage"
          element={<DoctorPermissionPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowseRouter;
