import { BsFillCloudUploadFill } from "react-icons/bs";
import "./AddModalContent.scss";

export default function AddModalContent({ isInterests = false }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div className="border rounded-3 p-3">
        <h5 className="green_underline">Add new: </h5>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
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

          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={`company name...`}
              className="p-2 w-100 rounded-3 modal__input"
            />
          </div>

          <div className="">
            <textarea
              name={`${isInterests ? "ask" : "description"}`}
              id={`${isInterests ? "ask" : "description"}`}
              rows={4}
              className="p-2 w-100 rounded-3 modal__input"
              placeholder={`${isInterests ? "ask..." : "description..."}`}
            ></textarea>
          </div>

          {isInterests ? (
            <div className="">
              <input
                type="text"
                name="commitment"
                id="commitment"
                placeholder={`commitment...`}
                className="p-2 w-100 rounded-3 modal__input"
              />
            </div>
          ) : (
            ""
          )}

          <div className="">
            <input
              type="number"
              name="equity"
              id="equity"
              placeholder={`equity...`}
              className="p-2 w-100 rounded-3 modal__input"
            />
          </div>

          <button type="submit" className="green_button w-auto mx-auto fs-6">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
