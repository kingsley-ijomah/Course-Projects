# install fonts in index.css
...
@font-face {
  font-family: 'OpenSans-Bold';
  src: local('OpenSans-Bold'), url(fonts/OpenSans-Bold.ttf) format('truetype');
}

@font-face {
  font-family: 'OpenSans-Light';
  src: local('OpenSans-Light'), url(fonts/OpenSans-Light.ttf) format('truetype');
}

@font-face {
  font-family: 'OpenSans-Regular';
  src: local('OpenSans-Regular'), url(fonts/OpenSans-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'OpenSans-ExtraBold';
  src: local('OpenSans-ExtraBold'), url(fonts/OpenSans-ExtraBold.ttf) format('truetype');
}


# create theme file
src/theme.js

import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const alpha = '#2C3E50'
const beta = '#0A7ED2'
const gamma = '#1D2730'
const delta = '#EDEDED'
const alert = '#FD5959'
const contrast = '#E84188'
const elements = '#C4C4C4'
const light = '#FFF'
const skills = '#e1e1e1'

export default createTheme({
  typography: {
    fontFamily: 'OpenSans-Regular',
  },
  palette: {
    primary: {
      main: `${alpha}`,
    },
    secondary: {
      main: `${beta}`,
    },
    error: {
      main: `${alert}`,
    },
    common: {
      alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
    },
    background: {
      // site's background colour
      default: `${delta}`
    }
  },
  container: {
    width: '900px',
    margin: '0 auto',
    // padding: '0 2rem',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  fonts: {
    bold: {
      fontFamily: 'OpenSans-Bold',
    },
    extraBold: {
      fontFamily: 'OpenSans-ExtraBold'
    },
    light: {
      fontFamily: 'OpenSans-Light',
    }
  },
});

# index.js
# adding theme provider and css baseline
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);