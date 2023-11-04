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

const homePage = [
  // {
  //   target: ".start_post_container",
  //   content: "Welcome to Home! You can create a post from here.",
  //   placement: "auto",
  // },
  {
    target: ".pro-sidebar-header",
    title: "Profile",
    content:
      "Your profile page describes everything relevant about you as a Professional.",
    placement: "auto",
  },
  {
    target: "#sidebar_createAPost",
    title: "Create A Post",
    content: "Share your thoughts with other Founders and Investors.",
    placement: "auto",
  },
  {
    target: "#sidebar_companyProfile",
    title: "Company",
    content: "Show the world what you’re building!",
    placement: "auto",
  },
  {
    target: "#sidebar_explore",
    title: "Explore",
    content:
      "Filter the Startups, Founders and Investors on the platform to find who you are truly looking for.",
    placement: "auto",
  },
  {
    target: "#sidebar_oneLink",
    title: "OneLink",
    content:
      "Your resume for everything related to fundraising, regardless of which side of a pitch day you’re on.",
    placement: "auto",
  },
  {
    target: "#sidebar_community",
    title: "Community",
    content:
      "Network with like-minded Founders and Investors in a private encrypted Community.",
    placement: "auto",
  },
  {
    target: "#sidebar_documentation",
    title: "Documentation",
    content:
      "Every document related to your business can be uploaded here to reflect on your OneLink",
    placement: "auto",
  },
  {
    target: "#sidebar_savedPosts",
    title: "Saved Posts",
    content: "Revisit gems shared by experienced veterans on this platform.",
    placement: "auto",
  },
  {
    target: "#sidebar_connections",
    title: "Connections",
    content:
      "Remember, you are as worthy as your connections are. So get connecting on Capital HUB",
    placement: "auto",
  },
];

// Keep this in the bottom
export const startupOnboardingSteps = {
  profilePage,
  explorePage,
  homePage,
};
