import React, { useRef, useState } from "react";
import "./ExperienceModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../../PopUp/ModalBS";
import IconCloudUpload from "../../../../../Investor/SvgIcons/IconCloudUpload";
import IconDeleteFill from "../../../../../Investor/SvgIcons/IconDeleteFill";
import IconEdit from "../../../../../Investor/SvgIcons/IconEdit";
import { getBase64 } from "../../../../../../utils/getBase64";
import SpinnerBS from "../../../../../Shared/Spinner/SpinnerBS";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecentExperience,
  deleteRecentExperience,
} from "../../../../../../Service/user";
import {
  loginSuccess,
  updateLoggedInUser,
} from "../../../../../../Store/features/user/userSlice";

const initialForm = {
  logo: "",
  companyName: "",
  location: "",
  experienceDuration: "",
  role: "",
};

export default function ExperienceModal() {
  // Fetch experience from global state
  const { recentExperience, _id: userId } = useSelector(
    (state) => state.user.loggedInUser
  );
  const dispatch = useDispatch();

  // States for inputs
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [isEditing, setIsEditing] = useState(false);

  //   State for loading
  const [loading, setLoading] = useState(false);

  //   Ref for close button
  const closeRef = useRef(null);

  // Handle file change
  async function handleFileChange(e) {
    let newFile = e.target.files[0];
    if (!newFile) {
      return;
    }

    let previewImage = URL.createObjectURL(newFile);
    try {
      let baseImage = await getBase64(newFile);

      // Set State
      setFormData((prev) => ({ ...prev, logo: baseImage }));
    } catch (error) {
      console.log("Error getting base64:", error);
    }

    // Set State
    setPreview(previewImage);
  }

  // Handle Input change
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  //   Handle Edit click
  function handleEditClick(e, data) {
    setFormData(data);
    setPreview(data.logo);
  }

  // Handle delete click
  async function handleDeleteClick(e, data) {
    let confirmed = window.confirm(
      `Are you sure you want to delete - "${data.companyName}"?`
    );
    if (confirmed) {
      try {
        const response = await deleteRecentExperience(data._id);
        console.log("del response", response);
        dispatch(updateLoggedInUser(response.data));
      } catch (error) {
        console.error("Error deleting Experience:", error);
      }
    } else {
      return;
    }
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();

    console.log("add exp", formData);

    // Set loading
    setLoading(true);

    try {
      const { data } = await addRecentExperience(userId, formData);
      console.log("Add response", data);
      dispatch(loginSuccess(data));
      setLoading(false);
    } catch (error) {
      console.error("Error saving Experience:", error);
      setLoading(false);
    }
  }

  //   Clear States
  function clearStates() {
    setFormData(initialForm);
    setIsEditing(false);
    setLoading(false);
    setPreview(null);
  }

  return (
    <div className="experience_modal_wrapper">
      <ModalBSContainer id={"experienceModal"} isStatic={false} modalXl>
        <ModalBSHeader
          title={"Add/Edit Experience"}
          closeCallback={clearStates}
          closeRef={closeRef}
        />
        <ModalBSBody>
          <div className="experience_modal_body d-flex flex-column flex-lg-row justify-content-between gap-3 ">
            {/* Current Experience */}
            <div className="current_experience rounded-4 border p-2 p-lg-3 oveflow-y-auto d-flex flex-column gap-3">
              <h5 className="green_underline">Current Experience</h5>
              {/* loop current experiences here */}
              {recentExperience?.map((data, index) => {
                return (
                  <div
                    className="border rounded-4 p-2 d-flex align-items-center justify-content-between"
                    key={data._id}
                  >
                    <img
                      src={data?.logo}
                      alt="companyName"
                      height={"40px"}
                      width={"40px"}
                      className="rounded-circle"
                      style={{ objectFit: "cover" }}
                    />

                    <h6 className="m-0">
                      {data?.companyName || "Company Name"}
                    </h6>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        type="button"
                        className="btn green_button px-3"
                        onClick={(e) => handleEditClick(e, data)}
                      >
                        <IconEdit />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => handleDeleteClick(e, data)}
                      >
                        <IconDeleteFill />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Experience form */}
            <form
              className="experience_form d-flex flex-column gap-3 rounded-4 border p-2  p-lg-3"
              onSubmit={handleSubmit}
            >
              <h5 className="green_underline">Update Experience</h5>

              <fieldset className="" style={{ cursor: "pointer" }}>
                <label htmlFor="logo" className="upload__label">
                  {preview ? (
                    <img
                      src={preview}
                      alt={"logo"}
                      height={75}
                      width={75}
                      className="rounded-circle"
                    />
                  ) : (
                    <IconCloudUpload height="2.5rem" width="2.5rem" />
                  )}
                </label>
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  accept="image/*"
                  className="visually-hidden"
                  onChange={handleFileChange}
                />
              </fieldset>

              {/* Company Name */}
              <fieldset>
                <legend className="ps-1">Company Name</legend>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="p-2 w-100 rounded-3 modal__input"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </fieldset>

              {/* Location */}
              <fieldset>
                <legend className="ps-1">Location</legend>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="p-2 w-100 rounded-3 modal__input"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </fieldset>

              {/* Experience */}
              <fieldset>
                <legend className="ps-1">Experience</legend>
                <input
                  type="text"
                  name="experienceDuration"
                  id="experienceDuration"
                  className="p-2 w-100 rounded-3 modal__input"
                  value={formData.experienceDuration}
                  onChange={handleInputChange}
                />
              </fieldset>

              {/* Role */}
              <fieldset>
                <legend className="ps-1">Role</legend>
                <input
                  type="text"
                  name="role"
                  id="role"
                  className="p-2 w-100 rounded-3 modal__input"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </fieldset>

              <div className="d-flex gap-3 align-items-center">
                <button
                  type="button"
                  className="green_button"
                  onClick={() => clearStates()}
                >
                  Clear
                </button>
                <button type="submit" className="green_button">
                  {loading ? (
                    <SpinnerBS spinnerSizeClass="spinner-border-sm" />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </form>
          </div>
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
