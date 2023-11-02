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

const homePage = [
  {
    target: ".start_post_container",
    content: "Welcome to Home! You can create a post from here.",
  },
  {
    target: ".investor_profile_container",
    content: "Manage your Profile from here.",
  },
  {
    target: ".recommendation_main_container",
    content: "Connect with People who have similar interests.",
  },
  {
    target: ".newscorner_container",
    content: "Read our top blog articles.",
  },
];

// Keep this in the bottom
export const investorOnboardingSteps = {
  explorePage,
  homePage,
};
