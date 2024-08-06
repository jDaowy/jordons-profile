// utils.js
export function isMobileScreen() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check for common mobile device patterns in the user agent
  if (/android|iphone|ipad|ipod|blackberry|iemobile/i.test(userAgent)) {
    return true;
  }

  // If no mobile patterns are found, check screen width (adjust as needed)
  return window.innerWidth <= 768; // Consider a typical mobile screen width
}
