import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 20
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0
    }
  },
  counterItem: {
    alignItems: 'center',
    margin: theme.spacing(2.5),
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      margin: theme.spacing(2, 4)
    },
    '& figure': {
      margin: 0,
      marginRight: theme.spacing(5),
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      width: 100,
      height: 100,
      lineHeight: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      transform: 'rotate(45deg)',
      [theme.breakpoints.down('xs')]: {
        width: 70,
        height: 70,
        lineHeight: '70px',
      },
      '& img': {
        transform: 'translateY(10px) rotate(-45deg)',
        width: '110%',
        maxHeight: 120,
        margin: '0 auto'
      },
    },
    '& h4': {
      fontSize: 36,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 24
      }
    },
    '& h6': {
      color: theme.palette.text.secondary
    }
  },
  text: {
    flex: 1,
  },
}));

export default counterStyles;
