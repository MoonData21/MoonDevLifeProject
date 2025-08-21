import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"

export const Head = () => (
  <>
    <title>Home</title>
    <meta name="description" content="Welcome to the MoonDevLife site homepage" />
  </>
)

const IndexPage = ({ data }) => {
  return (
    <Layout style={{ textAlign: "center" }}>
      <h1 style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
        Welcome to the MoonDevLife Site homepage.
      </h1>
      <p
        style={{ color: `white`, textAlign: "center", textDecoration: "none" }}
      >
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/about"
        >
          {" "}
          About{" "}
        </Link>
        <br />
        <br />
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/contact"
        >
          {" "}
          Contact Page{" "}
        </Link>
        <br />
        <br />
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/portfolio"
        >
          {" "}
          Portfolio Page{" "}
        </Link>
        <br />
      </p>
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage