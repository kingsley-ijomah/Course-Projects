# create JobApplications.js
# src/pages/JobApplications.js

import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'

export default function JobApplications() {
  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter />
    </>
  )
}

# ======================================================

# import job applications with new route

import JobApplications from './pages/JobApplications'

<Route exact path='/job-applications' render={props => <JobApplications {...props} />} /> 

# ======================================================


# create Search.js
# src/pages/Search.js

import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'

export default function Search() {
  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter />
    </>
  )
}

# ======================================================

# update App.js to include search route

import Search from './pages/Search'

<Route exact path='/search' render={props => <Search {...props} />} />

# ======================================================

# create notifications page
# src/pages/Notifications.js

import React from 'react'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'

export default function Notifications() {
  return (
    <>
      <PageTitle title='Notifications' />
      <ListingFilter />
    </>
  )
}

# ======================================================

# update App.js to include notifications route

import Notifications from './pages/Notifications'

<Route exact path='/notifications' render={props => <Notifications {...props} />} />

# ======================================================

# create page title notification
# src/pages/PageTitle.js

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
  container: {
    ...theme.container,
    padding: '5px 0'
  },
  title: {
    fontSize: '19px'
  }
}))

export default function PageTitle(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>
  )
}

# ======================================================

# create page saved jobs
# src/pages/SavedJobs.js

import React from 'react'
import PageTitle from '../components/PageTitle'
import ListingFilter from '../components/ListingFilter'


export default function SavedJobs() {
  return (
    <>
      <PageTitle title='Saved Jobs' />
      <ListingFilter />
    </>
  )
}

# ======================================================

# update App.js to include saved jobs route

import SavedJobs from './pages/SavedJobs'

<Route exact path='/saved-jobs' render={props => <SavedJobs {...props} />} />

# ======================================================