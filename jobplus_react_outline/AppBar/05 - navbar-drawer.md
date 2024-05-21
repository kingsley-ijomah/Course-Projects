import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

# update styles
const useStyles = makeStyles((theme) => ({
  logo: {
    ...theme.fonts.bold
  },
  badge: {
    backgroundColor: theme.palette.error.main,
    border: '1px white solid',
  },
  ,
  indicator: {
    backgroundColor: theme.palette.common.light,
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
})

# add class to logo
<Typography component="h6" className={classes.logo}>JOBPLUS</Typography>

# add class to star border icon
<Badge badgeContent={2} classes={{ badge: classes.badge }}>
  <StarBorderIcon className={classes.icons} />
</Badge>

# override indicator class
<Tabs ... classes={{ indicator: classes.indicator }}>
...
</Tabs>

# adding drawer

export default function Navbar(props) {
  ...

  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        ...
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            key={0}
            component={Link}
            to={'/'}
            selected={true}
            button>
             <ListItemText primary={'Home'} />
          </ListItem>

          <ListItem
            key={1}
            component={Link}
            to={'/job-listings'}
            selected={false}
            button>
             <ListItemText primary={'Job Listings'} />
          </ListItem>

          <ListItem
            key={0}
            component={Link}
            to={'/job-applications'}
            selected={false}
            button>
             <ListItemText primary={'Job Applications'} />
          </ListItem>
        </List>
      </Drawer>

    </Box>
  )
}