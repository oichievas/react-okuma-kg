import { makeStyles } from '@material-ui/core/styles';

const heroBanner = makeStyles(theme => ({
  container: {},
  heroBannerWrap: {
    position: 'relative',
    '& $container': {
      position: 'relative'
    }
  },
  bgDeco: {
    position: 'absolute',
    width: '120%',
    height: 1100,
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    opacity: 0.27,
    transform: 'rotate(-10deg)',
    top: -560,
    left: -40,
    borderRadius: 80,
    [theme.breakpoints.down('xs')]: {
      width: '110%'
    }
  },
  smallDeco: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& > div': {
      position: 'absolute',
      width: 475,
      height: 300,
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      transform: 'rotate(-10deg)',
      top: -200,
      right: -40,
      borderRadius: 40
    }
  },
  img: {
    marginTop: theme.spacing(5)
  }
}));

export default heroBanner;
