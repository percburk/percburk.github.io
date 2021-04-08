import { Box, Typography, Button, makeStyles } from '@material-ui/core';
import linkedIn from '../../images/linkedin.png';
import email from '../../images/email.png';

const useStyles = makeStyles((theme) => ({
  contactButton: {
    margin: theme.spacing(3),
  },
  logo: {
    height: 60,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Box
      height="95vh"
      className="slides"
      py={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Typography variant="h2" align="center">
          Let's get in touch.
        </Typography>
        <Box display="flex" justifyContent="center" paddingTop={4}>
          <Button
            className={classes.contactButton}
            target="_blank"
            href="https://www.linkedin.com/in/kevin-burk-2020/"
          >
            <img src={linkedIn} className={classes.logo} alt="linkedIn" />
          </Button>
          <Button
            className={classes.contactButton}
            target="_blank"
            href="mailto:kevinmburk@gmail.com"
          >
            <img src={email} className={classes.logo} alt="email" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
