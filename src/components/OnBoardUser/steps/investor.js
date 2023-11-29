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

const profilePage = [
  {
    target: ".professional_info_section",
    title: "Profile Page",
    content: "Add or Edit your professional information here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#missingDetails",
    title: "Fill-in Information",
    content: "Complete your profile setup with the Capital HUB chat assistant.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#userBio",
    title: "Bio",
    content: "Add or Edit information about yourself.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".AchievementsComponent",
    title: "Acheivements",
    content: "Showcase your accomplishments with Capital HUB to everyone!",
    placement: "right-center",
    disableBeacon: true,
  },
  {
    target: ".startups_invested",
    title: "Startups Invested",
    content: "Add information about the Startups you have Invested in.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".sector_interested",
    title: "Sectors Interested",
    content: "Add or edit Sectors that intrigue you here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: ".investment_philosophy",
    title: "Investment Philosophy",
    content: "Fill information about your Investment Philosophy here.",
    placement: "right-start",
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
    content: "Add or Edit your Investments and Interests from here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#sidebar_mySchedule",
    title: "My Schedule",
    content:
      "Manage meetings with Fund Seekers or Interested individuals from here.",
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

const myStartupsPage = [
  {
    target: "#myInvestmentsCards",
    title: "My Investments",
    content: "Information about your Investments can be seen here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#editInvestments",
    title: "Add New / Edit Investment",
    content:
      "Add a new Investment or Edit information of an existing Investment from here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#myInterestsCards",
    title: "My Interests",
    content: "Information about your Interests can be seen here.",
    placement: "auto",
    disableBeacon: true,
  },
  {
    target: "#editInterests",
    title: "Add New / Edit Interest",
    content:
      "Add a new Interest or Edit information of an existing Interest from here.",
    placement: "auto",
    disableBeacon: true,
  },
];

// Keep this in the bottom
export const investorOnboardingSteps = {
  explorePage,
  homePage,
  myStartupsPage,
  profilePage,
};
