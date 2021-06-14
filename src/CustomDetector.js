export const CustomDetector = {
  type: 'languageDetector',
  async: false,
  init: () => {},
  cacheUserLanguage: lng => {
    localStorage.setItem('i18nextLng', lng);
  },
  detect: () => {
    const lng = localStorage.getItem('i18nextLng');
    if (lng) return lng.substring(0, 2);

    return navigator.language.substring(0, 2);
  }
};
