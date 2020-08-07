const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
export const isMobileOnly = screenWidth < 768;
export const isMobileAndTabletOnly = screenWidth < 1024;
