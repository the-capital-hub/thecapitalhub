import React, { useRef } from "react";
import "./OnboardingSwitch.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsMobileView,
  selectShowOnboarding,
  setShowOnboarding,
} from "../../../../Store/features/design/designSlice";
import { selectIsInvestor } from "../../../../Store/features/user/userSlice";

export default function OnboardingSwitch() {
  const isMobileView = useSelector(selectIsMobileView);
  const showOnboarding = useSelector(selectShowOnboarding);
  const isInvestor = useSelector(selectIsInvestor);
  const dispatch = useDispatch();

  const switchRef = useRef();

  function handleSwitchClick(e) {
    const { checked } = e.target;

    if (isMobileView) {
      dispatch(setShowOnboarding(false));
      switchRef.current.checked = false;
      return;
    }

    dispatch(setShowOnboarding(checked));
  }

  return (
    <div className="onboarding_switch_wrapper">
      <div className="form-check form-switch">
        <input
          className={`form-check-input ${isInvestor && "investor"}`}
          type="checkbox"
          role="switch"
          id="onboardingToggle"
          // defaultChecked={false}
          checked={showOnboarding}
          onClick={handleSwitchClick}
          ref={switchRef}
        />
      </div>
    </div>
  );
}
