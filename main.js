const qs = (selector) => document.querySelector(selector);

// BEM classes to toggle
const wrapperDarkTheme = "classic--dark";

// DOM
const wrapper = qs(".classic");
const wrapperBtn = qs(".classic__button");

// EVENT FUNCTION AKA CALCULATION & UPDATE
const createEvent = (domToBePressed, domToBeControled, classToBeToggled) =>
  domToBePressed.addEventListener("click", (evt) => {
    domToBeControled.classList.toggle(classToBeToggled);
  });

// WAIT  FOR USER INPUT
createEvent(wrapperBtn, wrapper, wrapperDarkTheme);
