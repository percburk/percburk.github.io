import { createMuiTheme } from '@material-ui/core';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffebcd',
    },
    secondary: {
      main: '#33eb91',
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 400,
    h2: {
      fontFamily: 'Mulish',
      fontWeight: 200,
      letterSpacing: '0.1em',
    },
    h3: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.55rem',
      fontWeight: 200,
      letterSpacing: '0.15em',
    },
    h4: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.6rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    h5: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.4rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontWeight: 300,
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
  },
});

export default muiTheme;
