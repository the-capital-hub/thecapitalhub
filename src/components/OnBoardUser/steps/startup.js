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

const explorePage = [
  {
    target: ".filter_container",
    content:
      "Greetings! You've arrived at the exploration area of The Capital Hub.",
  },
  {
    target: ".startup_explore_tabs",
    content: "Select the category you're interested in.",
  },
  {
    target: ".startup_filters_container",
    content: "Customize your search by applying filters.",
  },
  {
    target: ".filtered-results",
    content: "Browse through all the search results.",
  },
];

// Keep this in the bottom
export const startupOnboardingSteps = {
  profilePage,
  explorePage,
};
