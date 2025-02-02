# imported packages
import React from 'react'
import Box from '@material-ui/core/Box';
import { AppBar, Badge, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from "react-router-dom";

# Bare Navbar
export default function Navbar() {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h6">JOBPLUS</Typography>
          <Tabs>
            <Tab
              key={0}
              label={'Home'}
              component={Link}
              to={'/'}
            />
            <Tab
              key={1}
              label={'Job Listings'}
              component={Link}
              to={'/job-listings'}
            />
            <Tab
              key={2}
              label={'Job Applications'}
              component={Link}
              to={'/job-applications'}
            />
          </Tabs>

          <Box>
            <IconButton size="small" component={Link} to={'/search'} color='inherit' edge='start'>
              <SearchIcon />
            </IconButton>
            <IconButton size="small" component={Link} to={'/notifications'} color='inherit' edge='start'>
              <Badge color="error" overlap="circle" variant="dot">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton size="small" component={Link} to={'/saved-jobs'} color='inherit' edge='start'>
              <Badge badgeContent={2}>
                <StarBorderIcon />
              </Badge>
            </IconButton>
            <IconButton size="small" component={Link} to={'/profile'} color='inherit' edge='start'>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton size="small" component={Link} to={'/login'} color='inherit' edge='start'>
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}