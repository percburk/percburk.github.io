import {
  GridList,
  GridListTile,
  Box,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import './Projects.css';
import pacamara from '../../images/pacamara.jpg';
import bekome from '../../images/bekome.png';
import movieSagas from '../../images/movie_sagas.jpeg';
import gallery from '../../images/gallery.jpg';
import feedback from '../../images/feedback.jpg';
import calculator from '../../images/calculator.jpg';

const projectData = [
  {
    title: 'Pacamara',
    desc: `My Prime solo project. Keeps track of all your coffee information, so you can share it with your coffee enthusiast friends.`,
    url: 'https://github.com/percburk/pacamara',
    photo: pacamara,
  },
  {
    title: 'bekome.',
    desc: `Prime group client project. Helping clients and therapists find the right personality fit.`,
    url: 'https://github.com/percburk/bekome',
    photo: bekome,
  },
  {
    title: 'Movie Sagas',
    desc: `Gallery of movies with detail view, with the ability to add, edit and delete movies.`,
    url: 'https://github.com/percburk/movie-sagas',
    photo: movieSagas,
  },
  {
    title: 'Gallery of Moments',
    desc: `Photo gallery using React, conditional rendering, and Material-UI.`,
    url: 'https://github.com/percburk/react-gallery',
    photo: gallery,
  },
  {
    title: 'Feedback',
    desc: `Recreating our daily feedback page at Prime. First use of Redux.`,
    url: 'https://github.com/percburk/redux-feedback-loop',
    photo: feedback,
  },
  {
    title: 'JQuery Calculator',
    desc: 'Calculator integrating a server running Express with jQuery.',
    url: 'https://github.com/percburk/jquery-server-side-calculator',
    photo: calculator,
  },
];

const useStyles = makeStyles((theme) => ({
  overlayText: {
    color: '#e0d8cd',
  },
  gridList: {
    maxHeight: 500,
    overflowY: 'scroll',
  },
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const screenXs = useMediaQuery(theme.breakpoints.only('xs'));
  const screenSm = useMediaQuery(theme.breakpoints.only('sm'));

  const handleColumns = () => (screenXs ? 1 : screenSm ? 2 : 3);

  return (
    <Box minHeight="95vh" className="slides" p={5}>
      <Typography variant="h4" align="center">
        Here are some of my latest projects.
      </Typography>
      <Box display="flex" justifyContent="center" py={6}>
        <GridList
          className={classes.gridList}
          cellHeight={250}
          cols={handleColumns()}
          spacing={0}
        >
          {projectData.map((item) => (
            <GridListTile key={item.title}>
              <Box className="container">
                <img src={item.photo} alt={item.title} className="media" />
                <Box className="overlay">
                  <Box p={2}>
                    <Typography
                      variant="h5"
                      className={classes.overlayText}
                      align="center"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className={classes.overlayText}
                      align="center"
                      variant="subtitle1"
                    >
                      {item.desc}
                    </Typography>
                    <Box display="flex" justifyContent="center" paddingTop={2}>
                      <Button
                        variant="outlined"
                        color="primary"
                        target="_blank"
                        href={item.url}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Box>
  );
}
