/**
 * windowサイズを返すHook
 */
import { useState, useEffect } from "react"
import getDevice from "utils/mobileDetect"
import { UI } from "enums"

const getWidth = () => {
  return getDevice() === "sp" ? window.innerWidth : UI.designWidth
}

function useWindowWidth() {
  const [width, setWidth] = useState(getWidth())
  useEffect(() => {
    const handleResize = () => setWidth(getWidth())
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return width
}

export default useWindowWidth
