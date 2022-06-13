import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bottomDeco: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
  },
  leftDeco: {
    position: 'absolute',
    left: -30,
    width: 145,
    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)',
    bottom: 0,
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  rightDeco: {
    position: 'absolute',
    right: -20,
    width: 118,
    bottom: 0,
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  topDeco: {
    position: 'absolute',
    width: '100%',
    height: 1260,
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    transform: 'rotate(-10deg)',
    top: -120,
    left: 30,
    borderRadius: 80,
    [theme.breakpoints.down('xs')]: {
      width: '150%',
      left: -100
    },
    '&:before': {
      content: '""',
      borderRadius: 80,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      opacity: 0.73
    },
    '& img': {
      transform: 'rotate(10deg)',
      position: 'relative',
      top: -120,
      left: 60,
      display: 'block',
      width: 460,
      [theme.breakpoints.down('md')]: {
        width: 360,
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  }
}));

export default useStyles;
