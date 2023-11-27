import React, { useState, useEffect } from "react";
import "./ProfessionalInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBase64 } from "../../../../utils/getBase64";
import {
  postInvestorData,
  postStartUpData,
  updateUserAPI,
} from "../../../../Service/user";
import {
  selectCompanyName,
  selectIsInvestor,
  loginSuccess,
  updateUserCompany,
} from "../../../../Store/features/user/userSlice";
import ProfessionalInfoDisplay from "./ProfessionalInfoDisplay";

export default function ProfessionalInfo({ theme }) {
  // Fetch Global State
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isInvestor = useSelector(selectIsInvestor);
  const companyName = useSelector(selectCompanyName);
  const dispatch = useDispatch();

  // console.log("companyName", companyName);

  // State for Professional Data
  const [professionalData, setProfessionalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture || "",
    fullName: loggedInUser?.firstName + " " + loggedInUser?.lastName || "",
    company: companyName,
    location: loggedInUser?.location || "Bangalore, India",
  });

  // State for isEditing
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch professional data
  useEffect(() => {
    if (isInvestor) {
      setProfessionalData((prev) => ({ ...prev, company: companyName }));
    } else {
      setProfessionalData((prev) => ({ ...prev, company: companyName }));
    }
  }, [setProfessionalData, companyName, isInvestor]);

  // Handle Text Change
  function handleTextChange(e) {
    let { name, value } = e.target;
    setProfessionalData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // Handle File change
  function handleFileChange(e) {
    const file = e.target.files[0];
    setSelectedFile(file);
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();

    let editedData = {
      designation: professionalData.designation,
      education: professionalData.education,
      experience: professionalData.experience,
    };

    try {
      if (selectedFile) {
        const profilePicture = await getBase64(selectedFile);
        editedData = { ...editedData, profilePicture: profilePicture };
      }
      //   console.log("from Submit", editedData, editedCompanyName);
      const {
        data: { data },
      } = await updateUserAPI(editedData);

      // Set new loggedInUser data
      dispatch(loginSuccess(data));

      if (isInvestor) {
        let editedCompanyName = {
          founderId: loggedInUser._id,
          companyName: professionalData.company,
        };
        const { data } = await postInvestorData(editedCompanyName);
        // console.log("post Investor", data);
        dispatch(updateUserCompany({ companyName: data.companyName }));
      } else {
        let editedCompanyName = {
          founderId: loggedInUser._id,
          company: professionalData.company,
        };
        const { data } = await postStartUpData(editedCompanyName);
        // console.log("post startup", data.company);
        dispatch(updateUserCompany({ company: data.company }));
      }

      setIsEditing(false);
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      className={`professional_info_section d-flex flex-column gap-3 p-2 px-md-4 py-4 bg-white shadow-sm ${
        theme === "investor" ? "rounded-4 border" : "rounded-4"
      }`}
    >
      <ProfessionalInfoDisplay
        theme={theme}
        professionalData={professionalData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        selectedFile={selectedFile}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
