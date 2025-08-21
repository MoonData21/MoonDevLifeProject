import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image3 = () => {
  return (
    <StaticImage
      src="../images/half-moon.jpg"
      alt="HalfMoon"
      placeholder="blurred"
      layout="constrained"
      width={800}
    />
  )
}

export default Image3
