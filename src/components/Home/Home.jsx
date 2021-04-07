import { Box, IconButton, Typography, makeStyles } from '@material-ui/core';
import { LinkedIn, Instagram, GitHub, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
  },
  iconButton: {
    color: 'black',
  },
  filler: {
    height: '100%',
    width: '100%',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      className="heading"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box paddingBottom={8}>
        <Typography variant="h1" align="center" className={classes.title}>
          Kevin Burk
        </Typography>
        <Box display="flex" justifyContent="center" paddingTop={6}>
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
