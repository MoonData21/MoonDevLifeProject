import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image4 from "../components/image4"
import logo from "../images/github.png"

export const Head = () => (
  <>
    <title>Portfolio Page</title>
    <meta
      name="description"
      content="Portfolio of Andrew Moon's React, Gatsby, and Python/Django projects."
    />
  </>
)

const projects = [
  {
    title: "Batman Project",
    github: "https://github.com/andrewjmoon/batmanapp2023",
    live: "https://thebatmanproject.netlify.app",
    description:
      "This site uses a local JSON file and Apollo Client to get mock data to the browser. Pagination is being utilized to paginate results of the TvMaze data. MUI 6 styles the project. React 18 was also used.",
  },
  {
    title: "Python Recipes Project",
    github: "https://github.com/MoonData21/PythonRecipesProjectAM",
    live: "https://anoon14.pythonanywhere.com/",
    description:
      "Recipe Sharing App with Django and HTML. The main objective of this project is to have users sign up and provide CRUD operations while sharing recipes with friends and family.",
  },
  {
    title: "The HelpOut Project",
    github: "https://github.com/andrewjmoon/thehelpoutproject",
    live: "https://thehelpoutproject.netlify.app/",
    description:
      "This site was meant to provide a list non-profits and charities for Covid-19 responses and where to donate to the organizations. There is also a list for tips/advice associated with Covid-19. Pagination is being utilized with data files to mimic an API fetch. Material-UI styles the project with an image layout scroll added as well.",
  },
  {
    title: "Reading List",
    github: "https://github.com/andrewjmoon/myreadinglist",
    live: "https://ams-readinglist.netlify.app/",
    description:
      "A Udacity React Nanodegree project that connects to a library database where the user can add, delete, search, and update the books. React Hooks and Material-UI are used.",
  },
  {
    title: "Would You Rather Game",
    github: "https://github.com/andrewjmoon/React-Redux-project",
    live: "https://wouldyourather-prefergame.netlify.app/",
    description:
      "A Udacity React Nanodegree project of a user participating in a Would You Rather game. Built with React, Redux, and Material-UI. Uses Redux hooks like useSelector and useDispatch.",
  },
  {
    title: "Music Playlist Project",
    github: "https://github.com/Secret-Machines/theplaylist",
    live: "https://ams-music-playlist.netlify.app",
    description:
      "This music site lists my top ten albums of the 2010's plus playlists for 2019 and 2020. Built with Tabletop.js, React Hooks, and Material-UI.",
  },
  {
    title: "Calendar Countdown",
    github: "https://github.com/Secret-Machines/calendarcountdown",
    live: "https://amscountdowncalendar.netlify.app",
    description:
      "This app is both a timer and a calendar combined built with React. A background-video is also played on the home page.",
  },
  {
    title: "Reading List App (Hooks)",
    github: "https://github.com/Secret-Machines/MyReadingList",
    live: "https://amsreadinglist.netlify.app/",
    description:
      "A reading list application utilizing local storage and React hooks (useReducer, useEffect, useState, and useContext).",
  },
  {
    title: "Pics and Vids",
    github: "https://github.com/andrewjmoon/picsandvids2",
    live: "https://pics-and-vids.netlify.app/",
    description:
      "Provides picturesque photos and videos through full-screen galleries, picture carousels, and YouTube embeds. Built with React Hooks and React Router.",
  },
  {
    title: "Book Collection App",
    github: "https://github.com/andrewjmoon/amsbookcollection",
    live: "https://amsbookcollectionapp.netlify.app/",
    description:
      "GatsbyJS, Airtable, and Material-UI are combined to create a book collection app of books and audiobooks in the public domain.",
  },
]

const Portfolio = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", color: "white", padding: "3rem" }}>
        <h1>Portfolio Page</h1>
        <p>
          This is the list of projects that I have created. Most of these projects
          are under continuous deployment and are subject to possible changes and
          improvements. The GitHub icon links to the project's repository.
        </p>
        <hr style={{ backgroundColor: "white", margin: "2rem 0" }} />

        <div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
          {projects.map((project, index) => (
            <ul key={index} style={{ marginBottom: "2rem", listStyle: "none" }}>
              <li style={{ color: "white" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "1rem" }}
                >
                  <img src={logo} alt="GitHub Logo" style={{ width: "24px" }} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", marginLeft: "0.5rem" }}
                >
                  {project.live}
                </a>
                <p style={{ marginTop: "0.5rem" }}>{project.description}</p>
              </li>
            </ul>
          ))}
        </div>

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

export default Portfolio