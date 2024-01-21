/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-rest-params */
// @ts-nocheck
import { useEffect, useState } from "react"
import { Gradient } from "@/utils"
import { GradientStyle } from "./GradientStyle"
import { GRADIENT_WEBGL } from "@/styles/variables"

export const GradientBackground = ({
  className = "",
  customCanvas = "gradient-canvas",
  useColor= "red"
}) => {
  const [initiated, setInitiated] = useState(false)

  useEffect(() => {
    if (window.gradient) {
      window.gradient.forceStop()
    }
    setInitiated(true)
  }, [])

  useEffect(() => {
    if (initiated) {
      const colors = [GRADIENT_WEBGL[useColor][0], GRADIENT_WEBGL[useColor][1], GRADIENT_WEBGL[useColor][2]]

      window.gradient = new Gradient()
      window.gradient.colorSet = colors
      window.gradient.initGradient("#" + customCanvas)
    }
  }, [initiated])

  return (
    <GradientStyle className={className} id="grad-container">
      <canvas id={customCanvas} data-transition-in />
    </GradientStyle>
  )
}

