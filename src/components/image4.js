import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image4 = () => {
  return (
    <StaticImage
      src="../images/moon.jpg"
      alt="Moon"
      placeholder="blurred"
      layout="constrained"
      width={800}
    />
  )
}

export default Image4
