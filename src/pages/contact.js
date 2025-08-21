import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image4 from "../components/image4"

export const Head = () => (
  <>
    <title>Contact Page</title>
    <meta
      name="description"
      content="Contact Andrew Moon: email, phone, YouTube, and GitHub links"
    />
  </>
)

const Contact = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", color: "white", padding: "3rem" }}>
        <h1>Contact Page</h1>

        <p>Email Address: andrewjm80@gmail.com</p>
        <p>Phone Number: 1-409-549-9571</p>

        <p>
          YouTube: CodingAndAnalysis
          <br />
          <a
            href="https://www.youtube.com/@CodingAndAnalysis"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Link to YouTube Channel
          </a>
        </p>

        <p>
          GitHub: andrewjmoon (StylesofOmega)
          <br />
          <a
            href="https://github.com/andrewjmoon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            https://github.com/andrewjmoon
          </a>
        </p>

        <p>
          GitHub: MoonData21
          <br />
          <a
            href="https://github.com/MoonData21"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            https://github.com/MoonData21
          </a>
        </p>

        <p>
          GitHub: Secret-Machines
          <br />
          <a
            href="https://github.com/Secret-Machines"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            https://github.com/Secret-Machines
          </a>
        </p>

        <Link style={{ color: "white", display: "inline-block", marginTop: "2rem" }} to="/">
          Go back to the homepage
        </Link>

        <div style={{ marginTop: "3rem" }}>
          <Image4 />
        </div>
      </div>
    </Layout>
  )
}

export default Contact