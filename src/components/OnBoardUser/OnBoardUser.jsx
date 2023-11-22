import React, { useEffect } from "react";
import Joyride from "react-joyride";
import "./OnBoardUser.scss";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function OnBoardUser({
  steps,
  run = true,
  setRun,
  scrollOffset,
  noBodyRoll,
  isChatPage,
  ...props
}) {
  // Pass in no body roll to disable scroll on body
  useEffect(() => {
    if (noBodyRoll && run) {
      disableBodyScroll(document.body);
    }
  }, [run, noBodyRoll]);

  const handleTourClose = () => {
    enableBodyScroll(document.body);
    setRun(false);
  };

  // Action for the current step is triggered on pressing of next button
  const handleAction = (index) => {
    const currentStepData = steps?.[index];
    if (currentStepData?.action) {
      currentStepData.action();
    }
  };

  // Beacon Component
  // const CustomBeaconComponent = ({
  //   ariaLabel,
  //   onClick,
  //   onMouseEnter,
  //   title,
  //   beaconRef,
  // }) => (
  //   <span
  //     className="custom-joyride-beacon"
  //     onClick={onClick}
  //     onMouseEnter={onMouseEnter}
  //     title={title}
  //     aria-label={ariaLabel}
  //     ref={beaconRef}
  //   ></span>
  // );

  const CustomButton = ({ onClick, title, isActive }) => (
    <button
      className={`custom-joyride-button${isActive ? " active" : ""} px-3 py-2 d-none d-md-block`}
      onClick={onClick}
      type="button"
    >
      {"Start Tutorial"}
    </button>
  );

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      // beaconComponent={CustomBeaconComponent}
      beaconComponent={CustomButton}
      // scrollToFirstStep
      showProgress
      showBackButton
      // disableOverlayClose
      // hideCloseButton={true}
      callback={({ action, index, lifecycle }) => {
        if (action === "close" || action === "reset") {
          handleTourClose();
        } else if (isChatPage && index === 2 && action === "next") {
          document.querySelector(".user_chat").click();
        } else if (isChatPage && index === 3 && action === "next") {
          document.querySelector(".chat_navbar_container > .left").click();
        } else if (action === "next" && lifecycle === "complete") {
          handleAction(index);
        }
      }}
      //   disableScrolling
      disableScrollParentFix
      scrollOffset={scrollOffset || 100}
      styles={{
        options: {
          primaryColor: "var(--currentTheme)",
        },
      }}
      {...props}
    />
  );
}

export default OnBoardUser;

//   useEffect(() => {
//     if (run) {
//       disableBodyScroll(document.body);
//     }
//   }, [run]);
