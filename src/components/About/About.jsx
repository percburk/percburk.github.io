import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import profilePic from '../../images/profile_pic.jpeg';
import codeIcon from '../../images/code_icon.png';
import ideaIcon from '../../images/idea_icon.png';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    width: 300,
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid black',
  },
  icon: {
    height: 85,
    width: 85,
    objectFit: 'contain',
    marginRight: theme.spacing(4),
  },
  bulletChevron: {
    marginRight: theme.spacing(1),
  },
  textMargin: {
    marginBottom: theme.spacing(2),
  },
  skillsTitleMargin: {
    marginBottom: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box minHeight="95vh" className="slides" p={8}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={6}
          display="flex"
          justify="center"
          alignItems="center"
        >
          <Box p={2}>
            <img src={profilePic} className={classes.media} alt="Kevin Burk" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
      </Grid>
      <Box pt={8} pb={3}>
        <Typography variant="h4" align="center">
          Skills
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box display="flex" mb={3} alignItems="center">
            <img src={codeIcon} alt="code" className={classes.icon} />
            <Box px={1}>
              <Typography className={classes.skillsTitleMargin}>
                <b>Technologies</b>
              </Typography>
              <Typography variant="body2">
                Javascript | Typescript | Python
              </Typography>
              <Typography variant="body2">HTML | CSS | SQL</Typography>
              <Typography variant="body2">
                React | Redux-Saga | Vue | Vuex
              </Typography>
              <Typography variant="body2">
                Node.js | Express | Flask | jQuery | Git
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" mb={3} alignItems="center">
            <img src={ideaIcon} className={classes.icon} alt="idea" />
            <Box>
              <Typography className={classes.skillsTitleMargin}>
                <b>Qualities</b>
              </Typography>
              <Box display="flex" alignItems="center" pb={1}>
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="subtitle1">
                  Four years of hospitality management experience.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" pb={1}>
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="subtitle1">
                  Master's Degree in Percussion Performance.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <ChevronRight className={classes.bulletChevron} />
                <Typography variant="subtitle1">
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
