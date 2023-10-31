import React, { useEffect } from "react";
import Joyride from "react-joyride";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function OnBoardUser({
  steps,
  run = true,
  scrollOffset,
  noBodyRoll,
  ...props
}) {
  // Pass in no body roll to disable scroll on body
  useEffect(() => {
    if (noBodyRoll && run) {
      disableBodyScroll(document.body);
    }
  }, [run]);

  const handleTourClose = () => {
    enableBodyScroll(document.body);
  };

  // Action for the current step is triggered on pressing of next button
  const handleAction = (index) => {
    const currentStepData = steps?.[index];
    if (currentStepData?.action) {
      currentStepData.action();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      scrollToFirstStep
      showProgress
      showBackButton
      // hideCloseButton={true}
      callback={({ action, index, lifecycle }) => {
        if (action === "close" || action === "reset") {
          handleTourClose();
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
