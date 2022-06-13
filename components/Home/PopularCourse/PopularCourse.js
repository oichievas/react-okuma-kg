import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import imgAPI from '../../../public/images/imgAPI';
import link from '../../../public/text/link';
import { withTranslation } from '../../../i18n';
import Title from '../../Title';
import SliderArt from '../SliderArt';
import ProductCard from '../../Cards/ProductCard';
import useStyle from './popular-course-style';

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
];

function PopularCourse(props) {
  const slider = useRef(null);
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useStyle();
  const [fade, setFade] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    afterChange: current => {
      if (current >= 1) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <Title
          head={t('common:education-landing.popular_title')}
          desc={t('common:education-landing.popular_desc')}
          align={isMobile ? 'center' : 'left'}
          color="secondary"
        />
        <Button
          href={link.education.product}
          color="primary"
          className={classes.viewAll}
        >
          {t('common:btn_seeall')}
          <NextIcon className={classes.icon} />
        </Button>
      </Container>
      <Container>
        <div className={classes.floatingArtwork}>
          <SliderArt fade={fade}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
              <div>
                <img
                  src={imgAPI.education[36]}
                  data-2d={imgAPI.education[35]}
                  data-3d={imgAPI.education[36]}
                  className="img-2d3d"
                  alt="services 3d"
                />
              </div>
            </ScrollAnimation>
          </SliderArt>
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            <div className={clsx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
            {courseData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <ProductCard
                  type="round"
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  href={link.education.productDetail}
                />
              </div>
            ))}
            <div className={clsx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
          </Carousel>
        </div>
        <IconButton
          className={clsx(classes.nav, classes.prev)}
          onClick={() => slider.current.slickPrev()}
        >
          <i className="ion-ios-arrow-left" />
        </IconButton>
        <IconButton
          className={clsx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
        >
          <i className="ion-ios-arrow-forward" />
        </IconButton>
      </div>
    </div>
  );
}

PopularCourse.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(PopularCourse);
