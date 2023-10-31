/*
--- Sample step ---

const steps = [
  {
    target: "# or .",
    content: "",
    action: () => {} // action will be called on next button
  },
]; 

*/

const startUp = {
  profilePage: [
    {
      target: ".professional_info_section",
      content: "some text here",
    },
    {
      target: "#missingDetails",
      content: "some text here",
    },
    {
      target: ".milestones",
      content: "some text here",
    },
  ],
};

const investor = {
  //   pageName: [],
};

// Keep in the bottom of the page
export const onboardingSteps = { startUp, investor };
