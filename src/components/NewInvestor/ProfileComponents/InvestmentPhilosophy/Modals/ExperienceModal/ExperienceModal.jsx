import React from "react";
import "./ExperienceModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../../PopUp/ModalBS";
import IconCloudUpload from "../../../../../Investor/SvgIcons/IconCloudUpload";

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
          <div className="experience_modal_body d-flex flex-column gap-3">
            {/* Current Experience */}

            {/* Experience form */}
            <form
              className="experience_form d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
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
            </form>
          </div>
        </ModalBSBody>
      </ModalBSContainer>
    </div>
  );
}
