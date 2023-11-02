import React from "react";
import "./EducationModal.scss";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
} from "../../../../../PopUp/ModalBS";
import IconCloudUpload from "../../../../../Investor/SvgIcons/IconCloudUpload";
import IconDeleteFill from "../../../../../Investor/SvgIcons/IconDeleteFill";
import IconEdit from "../../../../../Investor/SvgIcons/IconEdit";

export default function EducationModal() {
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
    <div className="education_modal_wrapper">
      <ModalBSContainer id={"educationModal"} isStatic={false} modalXl>
        <ModalBSHeader title={"Add/Edit Education"} />
        <ModalBSBody>
          <div className="education_modal_body d-flex flex-column flex-lg-row justify-content-between gap-3 ">
            {/* Current education */}
            <div className="current_education rounded-4 border p-2  p-lg-3 oveflow-y-auto d-flex flex-column gap-3">
              <h5 className="green_underline">Current Education</h5>
              {/* loop current education here */}
              <div className="border rounded-4 p-2 d-flex align-items-center justify-content-between">
                <img
                  src=""
                  alt="collegeName"
                  height={"40px"}
                  width={"40px"}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />

                <h6 className="m-0">{"College Name"}</h6>

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

            {/* Education form */}
            <form
              className="education_form d-flex flex-column gap-3 rounded-4 border p-2 p-lg-3"
              onSubmit={handleSubmit}
            >
              <h5 className="green_underline">Update Education</h5>

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
                <legend className="ps-1">Collage Name</legend>
                <input
                  type="text"
                  name="collageName"
                  id="collageName"
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

              {/* Passed out */}
              <fieldset>
                <legend className="ps-1">Passed Out</legend>
                <input
                  type="text"
                  name="passed"
                  id="passed"
                  className="p-2 w-100 rounded-3 modal__input"
                  onChange={handleInputChange}
                />
              </fieldset>

              {/* Course */}
              <fieldset>
                <legend className="ps-1">Course</legend>
                <input
                  type="text"
                  name="course"
                  id="course"
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
