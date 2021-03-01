import {
  Box,
  Typography,
  ThemeProvider,
  CssBaseline,
  makeStyles,
  IconButton,
  Button,
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
  iconButton: {
    color: 'black',
  },
  button: {
    margin: theme.spacing(3),
  },
  logo: {
    height: 60,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box height="5vh" className="divider" />
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
              className={classes.iconButton}
              target="_blank"
              href="https://www.linkedin.com/in/kevin-burk-2020/"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              target="_blank"
              href="https://www.instagram.com/percburk/"
            >
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://github.com/percburk/"
              className={classes.iconButton}
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              target="_blank"
              href="mailto:kevinmburk@gmail.com"
              className={classes.iconButton}
            >
              <Email fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box height="5vh" className="divider" />
      <Box height="100vh" className="slides" p={5}>
        <Intro />
      </Box>
      <Box height="5vh" className="divider" />
      <Box height="100vh" className="slides" py={5}>
        <ProjectsGrid />
      </Box>
      <Box height="5vh" className="divider"></Box>
      <Box
        height="100vh"
        className="slides"
        py={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h2">Let's get in touch.</Typography>
          <Box display="flex" justifyContent="center" paddingTop={4}>
            <Button
              className={classes.button}
              target="_blank"
              href="https://www.linkedin.com/in/kevin-burk-2020/"
            >
              <img
                src="images/LI-In-Bug.png"
                className={classes.logo}
                alt="linkedIn"
              />
            </Button>
            <Button
              className={classes.button}
              target="_blank"
              href="mailto:kevinmburk@gmail.com"
            >
              <img
                src="images/584856a0e0bb315b0f7675a9.png"
                className={classes.logo}
                alt="email"
              />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box height="5vh" className="divider" />
    </ThemeProvider>
  );
}

export default App;
