import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  /* Testimonial Card */
  icon: {},
  text: {},
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(5),
    overflow: 'visible',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shade.light,
    padding: theme.spacing(4, 2),
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    '& $icon': {
      borderRadius: 20,
      background: theme.palette.primary.main,
      transform: 'rotate(45deg)',
      width: 70,
      height: 70,
      top: -30,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      direction: 'ltr',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      '& span': {
        background: 'url(/images/education/quote.png) no-repeat transparent',
        width: 37,
        height: 37,
        display: 'block',
        transform: 'rotate(-45deg) translate(0px, 20px)',
        verticalAlign: 'top'
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& $text': {
      marginBottom: theme.spacing(4),
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      height: theme.spacing(9),
    },
  },
  captionTitle: {
    color: theme.palette.text.secondary
  },
}));

export default testiStyles;
