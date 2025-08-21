import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
//import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"


const drawerWidth = 240

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const toggleDrawer = (state) => () => {
    setOpen(state)
  }

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "blue",
          background:
            "black",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0.45, color: "white" }}
          >
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="h3" sx={{ flexGrow: 0.45 }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ color: "white" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "white" }} />
          )}
        </IconButton>
        <ul>
          {["Home", "About", "Contact", "Portfolio"].map((text) => (
            <li key={text}>
              <Link
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header