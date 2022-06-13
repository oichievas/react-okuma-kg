import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Paper from '@material-ui/core/Paper';
import PlayIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import imgAPI from '../../../public/images/imgAPI';
import { withTranslation } from '../../../i18n';
import yt from '../../../youtube';
import Title from '../../Title';
import BlogCard from '../../Cards/BlogCard';
import useStyles from './blog-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Blog(props) {
  const classes = useStyles();
  const blogData = [
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2022'
    },
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2022'
    },
    {
      title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
      category: 'Science - Math',
      date: 'Feb 08 2022'
    }
  ];

  // translation
  const { t } = props;

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Youtube Video
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3011'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('common:education-landing.blog_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="6p0VM-yUpGk"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Hidden smDown>
        <div className={classes.deco} />
      </Hidden>
      <Container fixed>
        <Box p={isDesktop ? 6 : 0}>
          <Title
            head={t('common:education-landing.blog_title')}
            desc={t('common:education-landing.blog_desc')}
            align={isMobile ? 'center' : 'left'}
            color="secondary"
          />
          <Grid container spacing={isDesktop ? 10 : 6} direction={isDesktop ? 'row-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                delay={200}
                duration={0.6}
                offset={-100}
              >
                <div className={classes.videoWrap}>
                  <div className={classes.videoCarousel}>
                    <Paper className={classes.item}>
                      <img src={imgAPI.education[14]} alt="cover" />
                      <IconButton className={classes.playBtn} onClick={() => handleClickOpen()}>
                        <PlayIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </div>
              </ScrollAnimation>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.blogList}>
                {blogData.map((item, index) => (
                  <div key={index.toString()}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={-200}
                      delay={index * 200}
                      duration={0.6}
                    >
                      <div>
                        <BlogCard
                          category={item.category}
                          title={item.title}
                          date={item.date}
                        />
                      </div>
                    </ScrollAnimation>
                  </div>
                ))}
                <Button color="secondary" className={classes.more}>More</Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Blog.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(Blog);
