import {
  Box,
  Typography,
  makeStyles,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ChevronRight } from '@material-ui/icons';
import profilePic from '../../images/profile_pic.jpeg';
import codeIcon from '../../images/code_icon.png';
import ideaIcon from '../../images/idea_icon.png';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 275,
    height: 275,
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid black',
  },
  icon: {
    height: 45,
    width: 45,
    objectFit: 'contain',
    marginRight: theme.spacing(3),
  },
  bulletChevron: {
    marginRight: theme.spacing(1),
  },
  textMargin: {
    marginBottom: theme.spacing(2),
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxHeight: 250,
  },
}));

const tech = [
  'Javascript',
  'Typescript',
  'C#',
  'HTML',
  'CSS',
  'Sass',
  'React',
  'Redux-Saga',
  'React Query',
  'Zustand',
  'Vue',
  'Node',
  'Express',
  'Postgres',
  'jQuery',
  'Azure',
  'Terraform',
  'Git',
  'GitHub Actions',
];

const qualities = [
  `Four years of hospitality management experience.`,
  `Master's Degree in Percussion Performance.`,
  `Experience and strong personal investment in a company culture of empathy and inclusivity.`,
  `Clear communicator, and supportive presence in any team setting.`,
  `Keen eye for design and passion for front end development.`,
];

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const screenSm = useMediaQuery(theme.breakpoints.down('sm'));
  const alignPic = () => (screenSm ? 'center' : 'left');

  return (
    <Box minHeight="95vh" className="slides" p={7}>
      <Grid container spacing={6}>
        <Grid container item justify={alignPic()} sm={12} md={4}>
          <img src={profilePic} className={classes.media} alt="Kevin Burk" />
        </Grid>
        <Grid container item sm={12} md={8} alignItems="center">
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
            <Typography variant="body2" className={classes.textMargin}>
              I currently work at Self Esteem Brands as a Software Developer primarily focused on frontend development.
            </Typography>
            <Typography variant="body2">
              I think a lot about my values and what ideas shape me. A guiding
              force in my life is my desire to have an ever-expanding mindset
              and to never stop learning. Software is never done, so I'm in a good spot.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.textMargin}
          >
            <img src={ideaIcon} className={classes.icon} alt="idea" />
            <Typography variant="h5">
              <b>Qualities</b>
            </Typography>
          </Box>
          <Box px={1}>
            {qualities.map((item, i) => (
              <Box key={i} display="flex" alignItems="center" pb={1}>
                <ChevronRight className={classes.bulletChevron} />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.textMargin}
          >
            <img src={codeIcon} alt="code" className={classes.icon} />
            <Typography variant="h5">
              <b>Technologies</b>
            </Typography>
          </Box>
          <Box className={classes.techList} px={1}>
            {tech.map((item, i) => (
              <Box key={i} display="flex" alignItems="center">
                <ChevronRight className={classes.bulletChevron} />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
