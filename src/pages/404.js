import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export const Head = () => (
  <>
    <title>404: Not Found</title>
    <meta name="description" content="Page not found on MoonDevLife site" />
  </>
)

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn’t exist... the sadness.</p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFoundPage