import React from "react";
import "./ExperienceModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../../PopUp/ModalBS";
import IconCloudUpload from "../../../../../Investor/SvgIcons/IconCloudUpload";
import IconDeleteFill from "../../../../../Investor/SvgIcons/IconDeleteFill";
import IconEdit from "../../../../../Investor/SvgIcons/IconEdit";

export default function ExperienceModal() {
  // Handle file change
  function handleFileChange(e) {
    const file = e.target.files[0];
  }

  // Handle Input change
  function handleInputChange(e) {
    const { name, value } = e.target;
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="experience_modal_wrapper">
      <ModalBSContainer id={"experienceModal"} isStatic={false} modalXl>
        <ModalBSHeader title={"Add/Edit Experience"} />
        <ModalBSBody>
          <div className="experience_modal_body d-flex flex-column flex-lg-row justify-content-between gap-3 ">
            {/* Current Experience */}
            <div className="current_experience rounded-4 border p-2 p-lg-3 oveflow-y-auto d-flex flex-column gap-3">
              <h5 className="green_underline">Current Experience</h5>
              {/* loop current experiences here */}
              <div className="border rounded-4 p-2 d-flex align-items-center justify-content-between">
                <img
                  src=""
                  alt="companyName"
                  height={"40px"}
                  width={"40px"}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />

                <h6 className="m-0">{"Company Name"}</h6>

                <div className="d-flex align-items-center gap-2">
                  <button type="button" className="btn green_button px-3">
                    <IconEdit />
                  </button>
                  <button type="button" className="btn btn-danger">
                    <IconDeleteFill />
                  </button>
                </div>
              </div>
            </div>

            {/* Experience form */}
            <form
              className="experience_form d-flex flex-column gap-3 rounded-4 border p-2  p-lg-3"
              onSubmit={handleSubmit}
            >
              <h5 className="green_underline">Update Experience</h5>

              <fieldset>
                <legend className="upload__label">
                  <IconCloudUpload height="2.5rem" width="2.5rem" />
                </legend>
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  accept="*/image"
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
                  onChange={handleInputChange}
                />
              </fieldset>

              {/* Experience */}
              <fieldset>
                <legend className="ps-1">Experience</legend>
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  className="p-2 w-100 rounded-3 modal__input"
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
                  onChange={handleInputChange}
                />
              </fieldset>

              <div className="d-flex gap-3 align-items-center">
                <button type="button" className="green_button">
                  Clear
                </button>
                <button type="submit" className="green_button">
                  Save
                </button>
              </div>
            </form>
          </div>
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
