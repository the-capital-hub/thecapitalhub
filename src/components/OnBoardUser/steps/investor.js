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
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".filter_by",
    content: "Select the category you're interested in.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".investor_explore_filters_container",
    content: "Customize your search by applying filters.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".filtered-results",
    content: "Browse through all the search results.",
    placement: "auto",
    disableBeacon: true,
  },
];

const homePage = [
  {
    target: ".pro-sidebar-header",
    title: "Profile",
    content:
      "Your profile page describes everything relevant about you as a Professional.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_createAPost",
    title: "Create A Post",
    content: "Share your thoughts with other Founders and Investors.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_companyProfile",
    title: "Company",
    content: "Show the world what you’re building!",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_oneLink",
    title: "OneLink",
    content:
      "Your resume for everything related to fundraising, regardless of which side of a pitch day you’re on.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_community",
    title: "Community",
    content:
      "Network with like-minded Founders and Investors in a private encrypted Community.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_explore",
    title: "Explore",
    content:
      "Filter the Startups, Founders and Investors on the platform to find who you are truly looking for.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_myStartups",
    title: "My Startups",
    content:
      "Every document related to your business can be uploaded here to reflect on your OneLink",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_mySchedule",
    title: "My Schedule",
    content:
      "Every document related to your business can be uploaded here to reflect on your OneLink",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_savedPosts",
    title: "Saved Posts",
    content: "Revisit gems shared by experienced veterans on this platform.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_connections",
    title: "Connections",
    content:
      "Remember, you are as worthy as your connections are. So get connecting on Capital HUB",
    placement: "auto",
    disableBeacon: true,
  },
];

// Keep this in the bottom
export const investorOnboardingSteps = {
  explorePage,
  homePage,
};
