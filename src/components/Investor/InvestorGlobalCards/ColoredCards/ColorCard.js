import React, { useState } from "react";
import "./ColorCard.scss";
import { postStartUpData } from "../../../../Service/user";
import { useSelector } from "react-redux";

const ColorCard = ({
  color,
  text,
  image,
  amount,
  background,
  onAmountChange,
  field,
  colorCardData,
  className,
  noRupee,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedAmount, setEditedAmount] = useState(amount);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleAmountChange = (e) => {
    setEditedAmount(e.target.value);
  };

  const handleBlur = () => {
    setIsEditMode(false);
    onAmountChange(editedAmount);
    const updatedData = {
      founderId: loggedInUser._id,
      colorCard: { ...colorCardData, [field]: editedAmount },
    };
    postStartUpData(updatedData)
      .then((res) => {
        console.log("Res-->", res);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
    console.log("loggedInUser-->", loggedInUser.colorCard);
  };

  return (
    <div
      className={`${className} colorcard-component card row`}
      style={{ background }}
    >
      <div className="col-7 col-sm-6 left-content" style={{ color }}>
        <>
          <h3 className="title">{text}</h3>
          {isEditMode ? (
            <input
              type="text"
              className="edit_input"
              id="edit"
              value={editedAmount}
              onChange={handleAmountChange}
              onBlur={handleBlur}
            />
          ) : (
            <span
              className="rupee-sign"
              onClick={onAmountChange ? handleEditClick : () => {}}
            >
              {!noRupee && "₹"} {editedAmount}{" "}
              {
                <label htmlFor="edit" className="edit-tip">
                  Click to edit
                </label>
              }
            </span>
          )}
        </>
      </div>
      <div className="col-5 right-content">
        <img src={image} alt="Card" width={60} />
      </div>
    </div>
  );
};

export default ColorCard;
