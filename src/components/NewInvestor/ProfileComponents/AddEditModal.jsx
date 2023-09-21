import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { getBase64 } from "../../../utils/getBase64";
import {
  addStartupInvested,
  addSectorOfInterest,
} from "../../../Service/user";
import { useSelector } from "react-redux";

export default function AddEditModal({
  dataArray,
  heading,
  isStartups = true,
  setInvestedStartups,
  setSectorsData
}) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [formData, setFormData] = useState({
    companyImage: "",
    name: "",
    description: "",
  });
  const [sectorLogo, setSectorLogo] = useState(null);
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    console.log(name);
    if (type === "file") {
      console.log("File selected:", files[0]);
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSectorLogoChange = (event) => {
    const { files } = event.target;
    setSectorLogo(files[0]);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Form Data:", formData);
      if (isStartups) {
        const logo = await getBase64(formData.companyImage);
        const newStartUpData = {
          logo: logo,
          name: formData.name,
          description: formData.description,
        }
        console.log(newStartUpData);
        const response = await addStartupInvested(loggedInUser?.investor, newStartUpData);
        setInvestedStartups(response.data.startupsInvested);
      } else {
        const logo = await getBase64(sectorLogo);
        const newSectorData = {
          logo: logo,
          name: formData.name,
        }
        console.log("Sector", newSectorData);
        const response = await addSectorOfInterest(loggedInUser?.investor, newSectorData);
        console.log(response.data);
        setSectorsData(response.data.sectorInterested);
      }
      setFormData({
        companyImage: "",
        name: "",
        description: "",
      });
      setSectorLogo(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile__modal__content">
      <div className="border rounded-3 p-2 w-100 overflow-y-auto">
        <h5 className="green_underline">{heading}: </h5>
        <div className="d-flex flex-column gap-3 p-0 p-sm-2 w-100">
          {dataArray.map((startUp, index) => {
            return (
              <div
                className="border rounded-3 p-2 d-flex justify-content-between align-items-center"
                key={index}
              >
                <img
                  src={startUp.logo || "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"}
                  alt={startUp.name}
                  style={{ width: "50px" }}
                />
                <h6 className="green_underline ">{startUp.name}</h6>
                <div className="d-flex gap-2">
                  <button className="btn green_button px-3">
                    <CiEdit style={{ color: "", backgroundColor: "" }} />
                  </button>
                  <button className="btn btn-danger">
                    <AiFillDelete style={{ color: "", backgroundColor: "" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <div className="border rounded-3 p-3">
        <form onSubmit={handleSubmit}>
          <h5 className="green_underline">Add new: </h5>

          <div className="d-flex flex-column gap-4">
            {isStartups ? (
              <div className="upload__image mt-4">
                <input
                  type="file"
                  name="companyImage"
                  id="companyImage"
                  accept="image/*"
                  className="visually-hidden"
                  onChange={handleInputChange}
                />
                <div className="upload__label p-2">
                  <BsFillCloudUploadFill
                    style={{
                      fontSize: "1.5rem",
                      color: "rgba(140, 90, 201, 1)",
                    }}
                  />
                  <label htmlFor="companyImage" className="text-black fw-lighter">
                    Upload Image
                  </label>
                </div>
              </div>
            ) : (
              <div className="upload__image mt-4">
                <input
                  type="file"
                  name="sectorLogo"
                  id="sectorLogo"
                  accept="image/*"
                  className="visually-hidden"
                  onChange={handleSectorLogoChange}
                />
                <div className="upload__label p-2">
                  <BsFillCloudUploadFill
                    style={{
                      fontSize: "1.5rem",
                      color: "rgba(140, 90, 201, 1)",
                    }}
                  />
                  <label htmlFor="sectorLogo" className="text-black fw-lighter">
                    Upload Image
                  </label>
                </div>
              </div>
            )}
            <div className="invested__company__name ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={`${isStartups ? "company" : "sector"} name...`}
                className="p-2 w-100 rounded-3 modal__input"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {isStartups ? (
              <div className="invested__company__description">
                <textarea
                  name="description"
                  id="description"
                  rows={8}
                  className="p-2 w-100 rounded-3 modal__input"
                  placeholder="description..."
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            ) : (
              ""
            )}

            <button className="btn green_button w-auto mx-auto fs-6" type="submit" data-bs-dismiss="modal">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
