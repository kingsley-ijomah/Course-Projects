# importing useState and useEffect

import { useState, useEffect } from 'react';

# create use state

export default function Navbar() {
  ...
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  ...
}

# call handleDrawerOpen state on MenuIcon onClick

<IconButton ... onClick={handleDrawerOpen}>
  <MenuIcon className={classes.hamburger} />
</IconButton>

# set handleDrawerClose state on Chevron button

<IconButton onClick={handleDrawerClose}>
  <ChevronLeftIcon />
</IconButton>

# create tabIndex useState

const [tabIndex, setTabIndex] = useState(false);

const handleTabIndexChange = (e, index) => {
  setTabIndex(index);
};

# add value and onChange onto tabs

<Tabs
  value={tabIndex}
  onChange={handleTabIndexChange}
  ...
>

# optimize links
export default function Navbar() {
  ...
  const routes = [
    { name: 'Home', link: '/', index: 0 },
    { name: 'Job Listings', link: '/job-listings', index: 1 },
    { name: 'Job Applications', link: '/job-applications', index: 2 }
  ];
  ...

# make tabs dynamic

<Tabs ...>
  {routes.map((route, index) => (
    <Tab
      key={`${route}${index}`}
      label={route.name}
      component={Link}
      to={route.link}
    />
  ))}
</Tabs>

# make ListItem dynamic

...
<List>
  {routes.map((route, index) => (
    <ListItem
      key={`${route}${index}`}
      component={Link}
      to={route.link}
      onClick={handleDrawerClose}
      selected={window.location.pathname === route.link}
      button>
      <ListItemText primary={route.name} />
    </ListItem>
  ))}
</List>

# useEffect to manage url path

export default function Navbar() {
  ...
  // takes care of setting active link when refreshed
  useEffect(() => {
    routes.forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          setTabIndex(route.index);
          break;
        default:
          return false;
      }
    });
  }, [window.location.pathname]);