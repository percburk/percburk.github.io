import {
  GridList,
  GridListTile,
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
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
    desc: `First big React project at Prime. Full CRUD app with a database of movies.`,
    url: 'https://github.com/percburk/movie-sagas',
    photo: movieSagas,
  },
  {
    title: 'Gallery of Moments',
    desc: `First larger assignment using React.`,
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
    desc: 'Calculator integrating a server running Express and JQuery.',
    url: 'https://github.com/percburk/jquery-server-side-calculator',
    photo: calculator,
  },
];

const useStyles = makeStyles((theme) => ({
  overlayText: {
    color: '#e0d8cd',
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <Box height="95vh" className="slides" p={5}>
      <Typography variant="h4" align="center">
        Here are some of my latest projects.
      </Typography>
      <Box display="flex" justifyContent="center" py={6}>
        <GridList cellHeight={250} cols={3} spacing={0}>
          {projectData.map((item) => {
            return (
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
                        variant="body2"
                      >
                        {item.desc}
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="center"
                        paddingTop={2}
                      >
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
            );
          })}
        </GridList>
      </Box>
    </Box>
  );
}

export default Projects;
