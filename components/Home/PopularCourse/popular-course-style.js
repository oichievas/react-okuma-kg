import { makeStyles } from '@material-ui/core/styles';

const blogStyles = makeStyles(theme => ({
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& > div': {
      flex: 1
    }
  },
  viewAll: {
    padding: '6px 24px',
    [theme.breakpoints.up('lg')]: {
      marginRight: 160
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 32
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  root: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 0)
    },
    '&:before': {
      content: '""',
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.27,
      width: 'calc(100% - 160px)',
      height: '100%',
      borderTopRightRadius: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
      [theme.breakpoints.down('xs')]: {
        borderRadius: '50px 50px 0 0'
      }
    }
  },
  artwork: {},
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(3),
    right: theme.direction === 'rtl' ? -100 : 'auto',
    left: theme.direction === 'rtl' ? 'auto' : -100,
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    '& $artwork': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        flot: 'right'
      },
      '@media (min-width: 1400px)': {
        marginRight: theme.spacing(-5)
      }
    }
  },
  props: {
    [theme.breakpoints.down('sm')]: {
      display: 'none !important'
    },
    '& > div': {
      width: 440,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    direction: 'ltr',
    '&:focus': {
      outline: 'none',
      margin: '0 auto'
    },
    '& > *': {
      width: 250
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    marginTop: -45,
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: theme.palette.background.paper
    },
    '& i': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  }
}));

export default blogStyles;
