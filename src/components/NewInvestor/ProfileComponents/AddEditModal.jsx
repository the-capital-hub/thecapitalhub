import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { BsFillCloudUploadFill } from "react-icons/bs";

export default function AddEditModal({ dataArray, heading }) {
  return (
    <div className="profile__modal__content">
      <div className="border rounded-3 p-2 w-100 overflow-y-auto">
        <h5 className="green_underline">{heading}: </h5>
        <div className="d-flex flex-column gap-3 p-0 p-sm-2 w-100">
          {dataArray.map((startUp, index) => {
            return (
              <div
                className="border rounded-3 p-2 d-flex justify-content-between align-items-center"
                key={startUp.id}
              >
                <img
                  src={startUp.image}
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
        <h5 className="green_underline">Add new: </h5>

        <div className="d-flex flex-column gap-4">
          <div className="upload__image mt-4">
            <input
              type="file"
              name="companyImage"
              id="companyImage"
              accept="image/*"
              className="visually-hidden"
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

          <div className="invested__company__name ">
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="company name..."
              className="p-2 w-100 rounded-3 modal__input"
            />
          </div>

          <div className="invested__company__description">
            <textarea
              name="description"
              id="description"
              rows={8}
              className="p-2 w-100 rounded-3 modal__input"
              placeholder="description..."
            ></textarea>
          </div>

          <button className="btn green_button w-auto mx-auto fs-6">Save</button>
        </div>
      </div>
    </div>
  );
}
