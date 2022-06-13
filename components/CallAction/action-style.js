import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: '240px auto 40px'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      height: 64,
      fontSize: 20,
    },
  },
  paper: {
    borderRadius: 24,
    background: theme.palette.background.paper,
    border: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 6),
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

export default useStyles;
