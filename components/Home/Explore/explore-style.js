import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {},
  root: {
    position: 'relative',
    paddingTop: theme.spacing(5),
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5)
    },
    '& $container': {
      [theme.breakpoints.down('md')]: {
        padding: '0 !important'
      }
    },
    '&:before': {
      content: '""',
      opacity: 0.27,
      width: 'calc(100% - 160px)',
      height: '105%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      borderBottomLeftRadius: theme.direction === 'rtl' ? 100 : 0,
      borderBottomRightRadius: theme.direction === 'ltr' ? 100 : 0,
      [theme.breakpoints.up('sm')]: {
        top: -160
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        borderRadius: 0
      },
    }
  },
  categoryTitle: {
    fontSize: 24,
    '& h3': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 22
      },
      '& svg': {
        fill: theme.palette.text.secondary,
        width: 36,
        height: 36,
        position: 'relative',
        top: 8,
        [theme.breakpoints.down('xs')]: {
          width: 18,
          height: 18,
          top: 2
        },
      },
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  rack: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(-4),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: 60,
      position: 'absolute',
      borderRadius: 60,
      background: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      opacity: 0.1,
      bottom: -20,
      left: 0
    }
  },
  content: {
    position: 'relative',
    display: 'flex',
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('md')]: {
      overflowX: 'auto',
      overflowY: 'hidden'
    }
  },
  viewAll: {
    marginBottom: 50,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(20),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
    '& svg': {
      marginLeft: theme.spacing(),
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
      [theme.breakpoints.up('sm')]: {
        fontSize: 36
      }
    }
  }
}));

export default useStyles;
