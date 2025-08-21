import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image3 from "../components/image3"

export const Head = () => (
  <>
    <title>About Page</title>
    <meta
      name="description"
      content="About Andrew Moon, Front-End Developer, ReactJS, GatsbyJS, Material-UI, Apollo, GraphQL, Python-Django"
    />
  </>
)

const About = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", color: "white", padding: "3rem" }}>
        <h1>About Page</h1>
        <p style={{ maxWidth: "800px", margin: "1rem auto" }}>
          Hello, my name is Andrew Moon and I am an aspiring Front-End Developer
          with some knowledge of Back-End Development. My primary focus has been on
          the ReactJS framework. While focusing on ReactJS, I have utilized the
          following applications in my studies and projects: ReactJS, Python-Django, GatsbyJS, Apollo,
          GraphQL, JavaScript, HTML, Material-UI, Auth0, and Airtable. Computer programming has
          become a great passion of mine in which I enjoy learning and solidifying
          my skills very much. I do not want to become complacent in my programming
          studies. I want to keep track of the latest updates and trends in the
          programming world and innovate with the times. Computer programming
          involves dedication, hard work, innovation, creativity, and perseverance.
          I possess all of these qualities and apply them every day to my programming
          studies and projects. Below are links to my Contact and Portfolio pages.
        </p>

        <div style={{ margin: "2rem 0" }}>
          <Link style={{ color: "white", marginRight: "1rem" }} to="/contact">
            Contact Page
          </Link>
          <br/>
          <br/>
          <Link style={{ color: "white", marginRight: "1rem" }} to="/portfolios">
            Portfolio Page
          </Link>
          <br/>
          <br/>
          <Link style={{ color: "white" }} to="/">
            Go back to the homepage
          </Link>
        </div>

        <Image3 />
      </div>
    </Layout>
  )
}

export default About
