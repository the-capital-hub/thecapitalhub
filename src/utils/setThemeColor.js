export const setThemeColor = () => {
  const isLoggedInLocal = localStorage.getItem("isLoggedIn");
  const themeValue =
    JSON.parse(localStorage.getItem("loggedInUser"))?.isInvestor === "true" && isLoggedInLocal
      ? "investor"
      : "startup";

  document.documentElement.style.setProperty(
    "--currentTheme",
    `var(--${themeValue})`
  );
  document.documentElement.style.setProperty(
    "--currentTheme-dark",
    `var(--${themeValue}-dark)`
  );
  document.documentElement.style.setProperty(
    "--currentTheme-light",
    `var(--${themeValue}-light)`
  );
  document.documentElement.style.setProperty(
    "--currentTheme-text",
    `var(--${themeValue}-text)`
  );
  return console.log("Theme set to : ", themeValue);
};
