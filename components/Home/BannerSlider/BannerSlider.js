import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-slick';
import link from '../../../public/text/link';
import imgAPI from '../../../public/images/imgAPI';
import { withTranslation } from '../../../i18n';
import { useText } from '../../../theme/common';
import useStyles from './slider-style';

function BannerSlider(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.bgDeco} />
      <Container className={classes.smallDeco}>
        <div />
      </Container>
      <div className={classes.carousel}>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide} id="slide1">
            <div className={classes.inner}>
              <div className={clsx(classes.img, classes.backgroundBanner)}>
                <img
                  className={clsx('img-2d3d', classes.imgSlide1)}
                  src={imgAPI.education[26]}
                  data-2d={imgAPI.education[25]}
                  data-3d={imgAPI.education[26]}
                  alt="background"
                />
              </div>
              <Container>
                <Grid container spacing={3} alignItems="center">
                  <Grid item md={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <div className={clsx(classes.title, classes.titleLeft)}>
                          <h4 className={clsx(text.title, classes.title)}>
                            {t('common:education-landing.banner_title')}
                          </h4>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('common:education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          {/* <Button color="primary" href="#" className={classes.btnText}>
                            {t('common:btn_detail')}
                          </Button> */}
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.education[20]}
                        className={clsx('img-2d3d', classes.imgSlide1)}
                        data-2d={imgAPI.education[19]}
                        data-3d={imgAPI.education[20]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide} id="slide2">
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.education[22]}
                        className={clsx('img-2d3d', classes.imgSlide2)}
                        data-2d={imgAPI.education[21]}
                        data-3d={imgAPI.education[22]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <div className={clsx(classes.title, classes.titleLeft)}>
                          <h4 className={text.title}>
                            {t('common:education-landing.banner_title')}
                          </h4>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('common:education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button color="primary" href="#" className={classes.btnText}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={clsx(classes.slide, classes.centerContent)} id="slide3">
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ xs: 2, sm: 12 }}>
                      <div className={classes.text}>
                        <div className={classes.titleWrap}>
                          <div className={clsx(classes.title, classes.titleCenter)}>
                            <h4 className={text.title}>
                              {t('common:education-landing.banner_title')}
                            </h4>
                          </div>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('common:education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button color="primary" href="#" className={classes.btnText}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={clsx(classes.img, classes.hBanner)}>
                      <img
                        src={imgAPI.education[24]}
                        className="img-2d3d"
                        data-2d={imgAPI.education[23]}
                        data-3d={imgAPI.education[24]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden smDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>Биринчи слайд</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Экинчи слайд</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Үчүнчү слайд</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

BannerSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

BannerSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'education-landing'],
});

export default withTranslation(['common', 'education-landing'])(BannerSlider);
