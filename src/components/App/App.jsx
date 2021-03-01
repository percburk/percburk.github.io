import { Box, ThemeProvider, CssBaseline } from '@material-ui/core';
// Component imports
import muiTheme from '../muiTheme/muiTheme.js';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import Contact from '../Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box height="5vh" className="divider" />
      <Home />
      <Box height="5vh" className="divider" />
      <About />
      <Box height="5vh" className="divider" />
      <Projects />
      <Box height="5vh" className="divider"></Box>
      <Contact />
      <Box height="5vh" className="divider" />
    </ThemeProvider>
  );
}

export default App;
