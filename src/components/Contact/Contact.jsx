import { Box, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactButton: {
    margin: theme.spacing(3),
  },
  logo: {
    height: 60,
  },
}));

function Contact() {
  const classes = useStyles();
  
  return (
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
            className={classes.contactButton}
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
            className={classes.contactButton}
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
  );
}

export default Contact;
