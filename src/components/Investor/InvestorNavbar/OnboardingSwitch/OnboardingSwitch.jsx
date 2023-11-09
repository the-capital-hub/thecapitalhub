import React from "react";
import "./OnboardingSwitch.scss";

export default function OnboardingSwitch() {
  return (
    <div className="onboarding_switch_wrapper">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="onboardingToggle"
        />
      </div>
    </div>
  );
}
