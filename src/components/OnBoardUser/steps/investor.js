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

const explorePage = [
  {
    target: ".filter_container",
    content:
      "Greetings! You've arrived at the exploration area of The Capital Hub.",
  },
  {
    target: ".filter_by",
    content: "Select the category you're interested in.",
  },
  {
    target: ".investor_explore_filters_container",
    content: "Customize your search by applying filters.",
  },
  {
    target: ".filtered-results",
    content: "Browse through all the search results.",
  },
];

// Keep this in the bottom
export const investorOnboardingSteps = {
  explorePage,
};
