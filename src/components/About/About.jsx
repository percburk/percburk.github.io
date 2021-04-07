import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    width: 250,
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid black',
  },
  icon: {
    height: 80,
    width: 80,
    objectFit: 'contain',
    margin: theme.spacing(4),
  },
  bulletChevron: {
    marginRight: theme.spacing(1),
  },
  textMargin: {
    marginBottom: theme.spacing(2),
  },
}));

function Intro() {
  const classes = useStyles();
  return (
    <Box height="95vh" className="slides" p={8}>
      <Grid container>
        <Grid item xs={6} alignContent="center">
          <Box>
            <Typography variant="h4" className={classes.textMargin}>
              Hi, I'm Kevin.
            </Typography>
            <Typography variant="h5" className={classes.textMargin}>
              I'm a software developer in Minneapolis.
            </Typography>
            <Typography variant="body2" className={classes.textMargin}>
              I'm a classical percussionist, turned craft coffee professional,
              turned software developer. It really seems like all of this prior
              experience had led up to this new, exciting career.
            </Typography>
            <Typography variant="body2">
              I think a lot about my values and what ideas shape me. A guiding
              force in my life is my desire to have an ever-expanding mindset
              and to never stop learning. Software is never done, so I'm liking
              where this is going.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={6}
          display="flex"
          justify="center"
          alignItems="center"
        >
          <img
            src="images/0FAC769B-31B4-4F52-92BC-916FA2AF3F4F_1_105_c.jpeg"
            className={classes.media}
            alt="Kevin Burk"
          />
        </Grid>
      </Grid>
      <Box pt={8} pb={4}>
        <Typography variant="h4">Skills</Typography>
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Box display="flex">
            <img
              src="images/noun_code_587999.png"
              alt="code"
              className={classes.icon}
            />
            <Box px={1}>
              <Typography>
                <b>Technologies</b>
              </Typography>
              <Typography variant="body2">
                Javascript | Typescript | Python | HTML | CSS | SQL | React |
                Redux-Saga | Vue | Vuex | Node.js | Express | Flask | jQuery |
                Git
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex">
            <img
              src="images/noun_Idea_1175577.png"
              className={classes.icon}
              alt="idea"
            />
            <Box>
              <Typography>
                <b>Qualities</b>
              </Typography>
              <Box display="flex" alignItems="center" paddingBottom={0.5}>
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="body2">
                  Four years of hospitality management experience.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" paddingBottom={0.5}>
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="body2">
                  Master's Degree in Percussion Performance
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="body2">
                  Experience and strong personal investment in a company culture
                  of empathy and inclusivity.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Intro;
