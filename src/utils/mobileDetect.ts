const getDevice = () => {
  const ua = navigator.userAgent
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    return "sp"
  }
  if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
    return "tb"
  }

  return "other"
}

export default getDevice

export const isMobile = getDevice() === "sp"
