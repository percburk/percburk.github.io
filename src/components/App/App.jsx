import { Link } from 'react-scroll';
import { Box, ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';
// Component imports
import { muiTheme } from '../muiTheme/muiTheme.js';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import Contact from '../Contact/Contact.jsx';
import './App.css';

const useStyles = makeStyles((theme) => ({
  navText: {
    color: '#e0d8cd',
    marginLeft: theme.spacing(3),
    cursor: 'pointer',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        className="nav-bar"
        display="flex"
        justifyContent="flex-end"
        py={1.5}
        px={3}
      >
        <Link
          className={classes.navText}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={800}
        >
          ABOUT
        </Link>
        <Link
          className={classes.navText}
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={800}
        >
          PROJECTS
        </Link>
        <Link
          className={classes.navText}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={800}
        >
          CONTACT
        </Link>
      </Box>
      <Home />
      <Box height="5vh" className="divider" id="about" />
      <About />
      <Box height="5vh" className="divider" id="projects" />
      <Projects />
      <Box height="5vh" className="divider" id="contact" />
      <Contact />
      <Box height="5vh" className="divider" />
    </ThemeProvider>
  );
}
