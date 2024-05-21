# create JobListings.js
# src/pages/JobListings.js

import React from 'react';
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';

export default function JobListings(props) {

  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter />
    </>
  )
}

# ==================================================================
# add route to App.js

...
import JobListings from './pages/JobListings'

function App() {
  let history = useHistory()
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Switch>
        ...
        <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
      </Switch>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}

export default App;



# ==================================================================


# create ListingFilter component
components/ListingFilter.js

import { makeStyles } from '@material-ui/styles';
import Filter from './Filter'
import Listing from './Listing'
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: '1.2rem',
    ...theme.container,
    marginTop: '1.5rem'
  },
  lblock: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
  rblock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
  }
}))

export default function ListingFilter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
          <Filter />
          <Filter />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        <Listing />
        <Listing />
      </div>
    </div>
  )
}

# ==================================================================

# create Filter component

import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
    padding: '1rem',
    minWidth: '220px',
    marginBottom: '1rem'
  },
  title: {
    ...theme.fonts.extraBold,
    fontSize: '1rem',
    marginBottom: '0.91rem'
  },
  links: {
    listStyle: 'none',
    padding: 0,
    color: theme.palette.common.beta,
    '& span': {
      color: theme.palette.common.alpha,
    },
    '& li': {
      marginBottom: '0.4rem',
      '& a': {
        textDecoration: 'none',
        color: 'inherit'
      }
    }
  }
}))

export default function Filter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1">Browse by sector</Typography>

      <ul className={classes.links}>
        <li><Link to="/">Technology <span>(14)</span></Link></li>
        <li><Link to="/">Engineering <span>(200)</span></Link></li>
        <li><Link to="/">Health <span>(13)</span></Link></li>
      </ul>
    </div>
  )
}

# ==================================================================

# create Listing component
componenets/Listing.js

import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.beta}`,
    backgroundColor: theme.palette.common.light,
    padding: '15px',
    borderRadius: '3px',
    boxShadow: `1px 2px 3px 1px ${theme.palette.common.elements}`,
    marginBottom: '20px'
  },
  header: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: 'repeat(2, auto)',
  },
  title: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',

    ...theme.fonts.extraBold,
    fontSize: '1.1rem',
    color: theme.palette.common.beta,
  },
  saved: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
    justifySelf: 'right',
    fontSize: '30px',
  },
  company: {
    gridRow: '2 / 3',
    gridColumn: '1 / 2',
    fontSize: '0.8rem',
    margin: 0,
    '& span': {
      color: theme.palette.common.beta,
    }
  },
  items: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '0.5rem',
    listStyle: 'none',
    margin: '1.2rem 0',
    padding: 0,
    '& li': {
      display: 'flex',
      '& svg': {
        fontSize: '20px',
        marginRight: '0.5rem',
      }
    },
    '& li:nth-of-type(2)': {
      justifySelf: 'right'
    }
  },
  details: {
    fontSize: '0.9rem',
    marginBottom: 0,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  cta: {
    fontSize: '0.9rem',
    textAlign: 'right',
    display: 'block',
    color: 'inherit',
  }
}))

export default function Listing(props) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <header className={classes.header}>
          <Typography className={classes.title} variant="h1">Regulatory Affairs Senior Manager</Typography>
          <StarIcon className={classes.saved} />
          <p className={classes.company}>Posted by <span>Koco Media</span></p>
        </header>

        <ul className={classes.items}>
          <li><AttachMoneyIcon /><b>Salary negotiable</b></li>
          <li><LocationOnIcon />Heyes, <b>Uxbridge</b></li>
          <li><TimerIcon />Contract, full-time</li>
        </ul>

        <p className={classes.details}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Explicabo, asperiores ullam minus at <b><Link to="/">Read more...</Link></b>
        </p>

        <Link className={classes.cta} to="/">Withdraw application</Link>

      </div>
  )
}

# ==================================================================
