import React, { useState } from "react";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAPI } from "../../../../../Service/user";
import { loginSuccess } from "../../../../../Store/features/user/userSlice";

export default function UserBio() {
  // Fetch from store
  const userBio = useSelector((state) => state.user.loggedInUser.bio);
  const dispatch = useDispatch();

  // States for Bio
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [bioContent, setBioContent] = useState(userBio || "");

  // Submit Bio
  const submitBioHandler = async () => {
    const {
      data: { data },
    } = await updateUserAPI({ bio: bioContent });
    dispatch(loginSuccess(data));
    setIsBioEditable(!isBioEditable);
  };

  return (
    <div>
      <div className="box personal_information pb-4">
        <div className="personal_information_header">
          <h2 className="typography">Bio</h2>
          <span className="ms-auto">
            <button
              type="button"
              onClick={() => {
                setBioContent(userBio);
                setIsBioEditable(!isBioEditable);
              }}
            >
              {isBioEditable ? "Cancel" : "Edit"}
              <CiEdit />
            </button>
            {isBioEditable && (
              <button
                type="submit"
                className="ms-2"
                onClick={() => submitBioHandler()}
              >
                Save <CiSaveUp2 />
              </button>
            )}
          </span>
        </div>
        <div className="mt-2">
          <div className="designation_info">
            {isBioEditable ? (
              <textarea
                value={bioContent}
                name="bio"
                onChange={(e) => setBioContent(e.target.value)}
                className="profile_edit_field"
                rows={5}
              />
            ) : (
              <p className="small_typo">
                {bioContent || "Click on edit to add bio"}
              </p>
            )}
          </div>
        </div>
        {/* <div className="col-12 mt-2 designation_see_more">
      <Link to={""}>See more</Link>
    </div> */}
      </div>
    </div>
  );
}
