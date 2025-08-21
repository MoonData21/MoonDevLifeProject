import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image2 = () => {
  return (
    <StaticImage
      src="../images/eclipse.jpg"
      alt="Eclipse"
      placeholder="blurred"
      layout="constrained"
      width={800}
    />
  )
}

export default Image2
