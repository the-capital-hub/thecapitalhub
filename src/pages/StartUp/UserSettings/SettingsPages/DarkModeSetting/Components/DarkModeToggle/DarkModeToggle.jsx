import React, { useState } from "react";
import "./DarkModeToggle.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTheme,
  toggleTheme,
} from "../../../../../../../Store/features/design/designSlice";
import Form from "react-bootstrap/Form";

export default function DarkModeToggle() {
  const theme = useSelector(selectTheme);
  const [selectedMode, setSelectedMode] = useState(theme);
  const dispatch = useDispatch();

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
    dispatch(toggleTheme(event.target.value));
  };

  return (
    <div className="dark-mode-toggle-wrapper">
      <Form>
        <Form.Group controlId="darkModeToggle">
          <Form.Check
            type="radio"
            label="Dark mode"
            value="dark"
            checked={selectedMode === "dark"}
            onChange={handleModeChange}
            id="darkModeRadio"
          />
          <Form.Check
            type="radio"
            label="Light mode"
            value="light"
            checked={selectedMode === "light"}
            onChange={handleModeChange}
            id="lightModeRadio"
          />
        </Form.Group>
      </Form>
      <h6 className="mt-3">
        Current mode:{" "}
        <span className="text-capitalize">{selectedMode} mode</span>
      </h6>
    </div>
  );
}
