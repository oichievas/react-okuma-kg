import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& p': {
      marginBottom: theme.spacing(5)
    }
  },
  btn: {
    minWidth: 150
  },
  illustration: {
    '& img': {
      width: '100%'
    }
  },
}));

export default aboutStyles;
