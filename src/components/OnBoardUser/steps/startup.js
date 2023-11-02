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

const profilePage = [
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
];

// Keep this in the bottom
export const startupOnboardingSteps = {
  profilePage,
};
