import {
  GridList,
  GridListTile,
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import './ProjectsGrid.css';

const projectData = [
  {
    title: 'Pacamara',
    desc: `My Prime solo project. Keeps track of all your coffee information, so you can share it with your coffee enthusiast friends.`,
    url: 'https://github.com/percburk/pacamara',
    photo: 'images/pacamara-background2.jpg',
  },
  {
    title: 'Movie Sagas',
    desc: `First big React project at Prime. Full CRUD app with a database of movies.`,
    url: 'https://github.com/percburk/movie-sagas',
    photo: 'images/davebowman.jpeg',
  },
  {
    title: 'Gallery of Moments',
    desc: `First larger assignment using React.`,
    url: 'https://github.com/percburk/react-gallery',
    photo: 'images/rirri-z4KhbVhPP7s-unsplash.jpg',
  },
  {
    title: 'To-Do List',
    desc: `First larger assignment using SQL, a full CRUD app.`,
    photo: 'images/isabel-maria-guner-velasco-M3ymaLBPMQ8-unsplash.jpg',
    url: 'https://github.com/percburk/weekend-sql-to-do-list',
  },
  {
    title: 'Feedback',
    desc: `Recreating our daily feedback page at Prime. First use of Redux.`,
    url: 'https://github.com/percburk/redux-feedback-loop',
    photo: 'images/jon-tyson-82ZEOTntP8g-unsplash.jpg',
  },
  {
    title: 'JQuery Calculator',
    desc: 'Calculator integrating a server running Express and JQuery.',
    url: 'https://github.com/percburk/jquery-server-side-calculator',
    photo: 'images/charles-deluvio-GlavtG-umzE-unsplash.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  overlayText: {
    color: '#ffebcd',
  },
}));

function ProjectsGrid() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" align="center">
        Here are some of my latest projects.
      </Typography>
      <Box display="flex" justifyContent="center" py={5}>
        <GridList cellHeight={250} cols={3} spacing={0}>
          {projectData.map((item, i) => {
            return (
              <GridListTile key={i}>
                <div className="container">
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
                </div>
              </GridListTile>
            );
          })}
        </GridList>
      </Box>
    </>
  );
}

export default ProjectsGrid;
