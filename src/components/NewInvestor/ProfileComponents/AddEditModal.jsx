import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { getBase64 } from "../../../utils/getBase64";
import {
  addStartupInvested,
  addSectorOfInterest,
  getInvestorById,
  uploadLogo,
  postInvestorData,
} from "../../../Service/user";
import { useSelector } from "react-redux";

export default function AddEditModal({
  dataArray,
  heading,
  isStartups = true,
  setInvestedStartups,
  setSectorsData,
  testformData,
}) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [formData, setFormData] = useState({
    companyImage: "",
    name: "",
    description: "",
    equity: "",
  });
  const [sectorLogo, setSectorLogo] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isNewImage, setNewImage] = useState(false);

  const handleInputChange = (event) => {
    console.log(testformData);
    const { name, value, type, files } = event.target;
    console.log(name);
    if (type === "file") {
      setNewImage(false);
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
    setNewImage(false);
  };

  //handle add and edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEdited) {
        const { data: investor } = await getInvestorById(
          loggedInUser?.investor
        );
        if (isStartups) {
          const editedStartUp = investor.startupsInvested[editIndex];
          editedStartUp.name = formData.name;
          editedStartUp.description = formData.description;
          editedStartUp.investedEquity = formData.equity;
          if (formData.companyImage instanceof Blob) {
            const logo = await getBase64(formData.companyImage);
            const { url } = await uploadLogo({ logo });
            editedStartUp.logo = url;
          }
          investor.startupsInvested[editIndex] = editedStartUp;
          const { data: response } = await postInvestorData(investor);
          setInvestedStartups(response.startupsInvested);
        } else {
          const editedSector = investor.sectorInterested[editIndex];
          editedSector.name = formData.name;
          if (sectorLogo instanceof Blob) {
            const logo = await getBase64(sectorLogo);
            const { url } = await uploadLogo({ logo });
            editedSector.logo = url;
          }
          investor.sectorInterested[editIndex] = editedSector;
          const { data: response } = await postInvestorData(investor);
          setSectorsData(response.sectorInterested);
        }
      } else {
        if (isStartups) {
          const logo = await getBase64(formData.companyImage);
          const newStartUpData = {
            logo: logo,
            name: formData.name,
            description: formData.description,
            investedEquity: formData.equity,
          };
          console.log(newStartUpData);
          const response = await addStartupInvested(
            loggedInUser?.investor,
            newStartUpData
          );
          setInvestedStartups(response.data.startupsInvested);
        } else {
          const logo = await getBase64(sectorLogo);
          const newSectorData = {
            logo: logo,
            name: formData.name,
          };
          console.log("Sector", newSectorData);
          const response = await addSectorOfInterest(
            loggedInUser?.investor,
            newSectorData
          );
          console.log(response.data);
          setSectorsData(response.data.sectorInterested);
        }
      }
      resetFormData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (index) => {
    try {
      setIsEdited(true);
      setNewImage(true);
      setEditIndex(index);
      if (isStartups) {
        const startUp = dataArray[index];
        setFormData({
          name: startUp.name,
          companyImage: startUp.logo,
          description: startUp.description,
        });
      } else {
        const sector = dataArray[index];
        setFormData({
          name: sector.name,
        });
        setSectorLogo(sector.logo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormData = () => {
    setFormData({
      companyImage: "",
      name: "",
      description: "",
    });
    setSectorLogo(null);
    setIsEdited(false);
    setEditIndex(null);
    setNewImage(false);
  };

  const handleDelete = async (index) => {
    try {
      const { data: investor } = await getInvestorById(loggedInUser?.investor);
      if (isStartups) {
        investor.startupsInvested.splice(index, 1);
        const { data: response } = await postInvestorData(investor);
        setInvestedStartups(response.startupsInvested);
      } else {
        investor.sectorInterested.splice(index, 1);
        const { data: response } = await postInvestorData(investor);
        setSectorsData(response.sectorInterested);
      }
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
                  src={
                    startUp.logo ||
                    "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                  }
                  alt={startUp.name}
                  style={{ width: "50px" }}
                />
                <h6 className="green_underline ">{startUp.name}</h6>
                <div className="d-flex gap-2">
                  <button
                    className="btn green_button px-3"
                    onClick={() => handleEdit(index)}
                  >
                    <CiEdit style={{ color: "", backgroundColor: "" }} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
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
                <div className="">
                  <label
                    htmlFor="companyImage"
                    className="text-black fw-lighter upload__label  "
                  >
                    <BsFillCloudUploadFill
                      style={{
                        fontSize: "1.5rem",
                        color: "rgba(140, 90, 201, 1)",
                      }}
                    />
                    Upload Image
                    {formData.companyImage && (
                      <img
                        src={
                          isEdited && isNewImage
                            ? formData.companyImage
                            : URL.createObjectURL(formData.companyImage)
                        }
                        alt="Selected Image"
                        style={{ maxWidth: "100%", maxHeight: "70px" }}
                      />
                    )}
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
                  {sectorLogo && (
                    <img
                      src={
                        isEdited && isNewImage
                          ? sectorLogo
                          : URL.createObjectURL(sectorLogo)
                      }
                      alt="Selected Image"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  )}
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
              <>
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
              <div className="invested__company__name ">
              <input
                type="number"
                name="equity"
                id="equity"
                placeholder="Equity"
                className="p-2 w-100 rounded-3 modal__input"
                value={formData.equity}
                onChange={handleInputChange}
              />
            </div>
            </>
            ) : (
              ""
            )}

            <div className="d-flex justify-between">
              <button
                className="btn green_button w-auto fs-6"
                type="button"
                onClick={resetFormData}
              >
                Clear
              </button>
              <button
                className="btn green_button w-auto fs-6 ms-2"
                type="submit"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
