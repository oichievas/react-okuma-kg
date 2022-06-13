import { makeStyles } from '@material-ui/core/styles';

const sliderArtStyles = makeStyles(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 640
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& img': {
      zIndex: 5,
      position: 'relative',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        width: '70%'
      }
    },
  },
  figure: {
    height: 600,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease',
    direction: 'ltr'
  },
  fade: {
    opacity: '0.15',
  }
}));

export default sliderArtStyles;
