import { createMuiTheme } from '@material-ui/core';

export const muiTheme = createMuiTheme({
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
    h1: {
      fontFamily: 'Lato',
      fontWeight: 200,
      letterSpacing: '0.1em',
      fontSize: '6.7rem',
    },
    h2: {
      fontFamily: 'Lato',
      fontWeight: 200,
      letterSpacing: '0.1em',
    },
    h3: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.6rem',
      fontWeight: 200,
      letterSpacing: '0.15em',
    },
    h4: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.8rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    h5: {
      fontFamily: 'Source Code Pro',
      fontSize: '1.2rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 300,
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});
