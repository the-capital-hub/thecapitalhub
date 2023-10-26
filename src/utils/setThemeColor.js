export const setThemeColor = () => {
  const themeValue = JSON.parse(localStorage.getItem("loggedInUser"))
    ?.isInvestor
    ? "investor"
    : "startup";

  document.documentElement.style.setProperty(
    "--currentTheme",
    `var(--${themeValue})`
  );
  document.documentElement.style.setProperty(
    "--currentTheme-text",
    `var(--${themeValue}-text)`
  );
  document.documentElement.style.setProperty(
    "--currentTheme-bg",
    `var(--${themeValue}-bg)`
  );
  return console.log("Theme set to : ", themeValue);
};
