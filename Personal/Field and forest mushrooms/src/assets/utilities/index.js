export const setStorageLanguage = (language) => {
  localStorage.setItem("language", language);
};

export const getStorageLanguage = () => {
  localStorage.getItem("language");
};

export const validateString = (string) => {
  return string?.match(/^[A-Za-zא-ת]+$/);
};

export const validateEmail = (email) => {
  return email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};

export const scrollToTop = () => window.scroll(0, 0);

export const scrollToElement = (element) => {
  document.getElementById(element).scrollIntoView("alignToTop");
};
