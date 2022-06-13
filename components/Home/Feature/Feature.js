import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '../../../i18n';
import imgAPI from '../../../public/images/imgAPI';
import { useText } from '../../../theme/common';
import Title from '../../Title';
import useStyles from './feature-style';

function Feature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Title
          head={t('common:education-landing.feature_title')}
          desc={t('common:education-landing.feature_desc')}
          align="center"
          color="primary"
        />
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={-100} afterAnimatedIn={handlePlay}>
          <Grid container spacing={isDesktop ? 4 : 2}>
            <Grid sm={6} xs={12} item>
              <div className={classes.counterItem}>
                <figure>
                  <img
                    className="img-2d3d"
                    src={imgAPI.education[28]}
                    data-2d={imgAPI.education[27]}
                    data-3d={imgAPI.education[28]}
                    alt="feature"
                  />
                </figure>
                <div className={classes.text}>
                  <h4 className={text.subtitle}>
                    +
                    {countup(100, play)}
                    K
                  </h4>
                  <h6 className={text.subtitle2}>
                    {t('common:education-landing.counter_videos')}
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={6} xs={12} item>
              <div className={classes.counterItem}>
                <figure>
                  <img
                    className="img-2d3d"
                    src={imgAPI.education[30]}
                    data-2d={imgAPI.education[29]}
                    data-3d={imgAPI.education[30]}
                    alt="feature"
                  />
                </figure>
                <div className={classes.text}>
                  <h4 className={text.subtitle}>
                    +
                    {countup(200, play)}
                  </h4>
                  <h6 className={text.subtitle2}>
                    {t('common:education-landing.counter_mentors')}
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={6} xs={12} item>
              <div className={classes.counterItem}>
                <figure>
                  <img
                    className="img-2d3d"
                    src={imgAPI.education[32]}
                    data-2d={imgAPI.education[31]}
                    data-3d={imgAPI.education[32]}
                    alt="feature"
                  />
                </figure>
                <div className={classes.text}>
                  <h4 className={text.subtitle}>
                    $
                    {countup(500, play)}
                  </h4>
                  <h6 className={text.subtitle2}>
                    {t('common:education-landing.counter_save')}
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={6} xs={12} item>
              <div className={classes.counterItem}>
                <figure>
                  <img
                    className="img-2d3d"
                    src={imgAPI.education[34]}
                    data-2d={imgAPI.education[33]}
                    data-3d={imgAPI.education[34]}
                    alt="feature"
                  />
                </figure>
                <div className={classes.text}>
                  <h4 className={text.subtitle}>
                    Free
                  </h4>
                  <h6 className={text.subtitle2}>
                    {t('common:education-landing.counter_free')}
                  </h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(Feature);
