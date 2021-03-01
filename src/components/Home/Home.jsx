import {
  Button,
  Box,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { LinkedIn, Instagram, GitHub, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
  },
  iconButton: {
    color: 'black',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box height="100vh" className="heading">
      <Box display="flex" justifyContent="flex-end" p={3}>
        <Button>About</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </Box>
      <Box>
        <Typography variant="h1" align="center" className={classes.title}>
          Kevin Burk
        </Typography>
        <Box display="flex" justifyContent="center" paddingTop={3}>
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
  );
}

export default Home;
