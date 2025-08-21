import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      src="../images/full-moon.jpg"
      alt="Full Moon"
      placeholder="blurred"
      layout="constrained"
      width={800}
    />
  )
}

export default Image