# create Footer component
src/components/Footer.js

import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    backgroundColor: theme.palette.common.alpha,
    color: theme.palette.common.light,
    textAlign: 'center',
    padding: '15px',
  },
}))

export default function Footer({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>COPYRIGHT &copy; JobPlus 2021</div>
  );
}

# import Footer into App.js
...
import Footer from './components/Footer';

function App() {
  let history = useHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;