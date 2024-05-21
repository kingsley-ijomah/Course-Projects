# adding styles
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    //migrate to theme.js
    width: '900px',
    margin: '0 auto',
    border: '1px yellow dotted'
  },
  iconsWrap: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root': {
      marginLeft: '13px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '27px'
    }
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 10,
      marginLeft: '10px'
    }
  },
  hamburger: {
    fontSize: '35px',
    marginRight: '10px',
  },
}))


# create classes const
# link up css

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.container}>

          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon className={classes.hamburger} />
            </IconButton>
          </Hidden>

          <Typography component="h6">JOBPLUS</Typography>

          <Hidden smDown>
            <Tabs className={classes.tabs}>
              ...
            </Tabs>
          </Hidden>

          <Box className={classes.iconsWrap}>
            ...
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}