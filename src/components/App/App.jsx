import {
  Box,
  Typography,
  ThemeProvider,
  CssBaseline,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import { LinkedIn, Instagram, Email, GitHub } from '@material-ui/icons';
// Component imports
import muiTheme from '../muiTheme/muiTheme.js';
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid.jsx';
import Intro from '../Intro/Intro.jsx';
import './App.css';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
  },
  media: {
    height: 200,
    width: 200,
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box height="5vh" className="divider"></Box>
      <Box
        height="100vh"
        className="heading"
        p={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h1" align="right" className={classes.title}>
            Kevin Burk
          </Typography>
          <Box display="flex" justifyContent="center">
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/kevin-burk-2020/"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.instagram.com/percburk/"
            >
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/percburk/">
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton target="_blank" href="mailto:kevinmburk@gmail.com">
              <Email fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box height="5vh" className="divider"></Box>
      <Box height="100vh" className="body" p={5}>
        <Intro />
      </Box>
      <Box height="5vh" className="divider"></Box>
      <Box height="100vh" className="footer" py={5}>
        <Typography variant="h5">
          Here are some of my latest projects.
        </Typography>
        <ProjectsGrid />
      </Box>
      <Box height="5vh" className="divider"></Box>
    </ThemeProvider>
  );
}

export default App;
