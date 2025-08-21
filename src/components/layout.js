import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Box, Typography, Link as MuiLink } from "@mui/material"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="main" sx={{ width: "100%" }}>
          {children}
        </Box>

        <Box
          component="footer"
          sx={{
            mt: 4,
            width: "100%",
            textAlign: "center",
            py: 2,
            borderTop: 1,
            borderColor: "divider",
          }}
          role="contentinfo"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()}, Built with{" "}
            <MuiLink
              href="https://www.gatsbyjs.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              Gatsby
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout