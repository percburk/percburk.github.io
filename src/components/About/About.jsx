import { Box, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    width: 250,
    objectFit: 'cover',
    borderRadius: '50%',
  },
  icon: {
    height: 70,
    width: 70,
    objectFit: 'contain',
    margin: theme.spacing(4),
  },
}));

function Intro() {
  const classes = useStyles();
  return (
    <Box height="100vh" className="slides" p={5} id="about">
      <Grid container>
        <Grid container item xs={6} alignContent="center">
          <Box>
            <Typography variant="h3" gutterBottom>
              Hi, I'm Kevin.
            </Typography>
            <Typography variant="h5" gutterBottom>
              I'm a software developer in Minneapolis.
            </Typography>
            <Typography>
              I'm a classical percussionist, turned craft coffee professional,
              turned software developer. It really seems like of this prior
              experience had led up to this new, exciting career.
            </Typography>
            <Typography>
              I think a lot about my values and what ideas shape me. A guiding
              force in my life is my desire to have an ever-expanding mindset
              and to never stop learning. Software is never done, so I'm liking
              where this is going.
            </Typography>
          </Box>
        </Grid>
        <Grid container item xs={6} direction="row-reverse">
          <img
            src="images/0FAC769B-31B4-4F52-92BC-916FA2AF3F4F_1_105_c.jpeg"
            className={classes.media}
            alt="Kevin Burk"
          />
        </Grid>
      </Grid>
      <Box py={4}>
        <Typography variant="h5">Skills</Typography>
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
            <img
              src="images/noun_code_587999.png"
              alt="code"
              className={classes.icon}
            />
            <Box>
              <Typography>Languages</Typography>
              <Typography>Javascript, HTML, CSS, SQL</Typography>
              <Typography>Libraries and Frameworks</Typography>
              <Typography>
                React, Redux-Saga, Material-UI, Node.js, Express, Bootstrap,
                jQuery, Git, PostgreSQL
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center">
            <img
              src="images/noun_Idea_1175577.png"
              className={classes.icon}
              alt="idea"
            />
            <Box>
              <Typography>
                Four years of hospitality management experience.
              </Typography>
              <Typography>Master's Degree in Percussion Performance</Typography>
              <Typography>
                Experience and strong personal investment in a company culture
                of empathy and inclusivity.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Intro;
