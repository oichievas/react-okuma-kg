import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Container from '@material-ui/core/Container';
import PaletteIcon from '@material-ui/icons/Palette';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LanguageIcon from '@material-ui/icons/Language';
import { withTranslation } from '../../../i18n';
import imgAPI from '../../../public/images/imgAPI';
import link from '../../../public/text/link';
import Title from '../../Title';
import Book from '../Book';
import useStyles from './explore-style';

const categoriesData = [
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    color: '#f74e10',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[6],
    title: 'Vivamus sit amet',
    color: '#c7618c',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    color: '#e59546',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    color: '#8f46e5',
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    color: '#ac8a55',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[2],
    color: '#274be3',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[0],
    color: '#6DB4A7',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
];

function Explore(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Translation Function
  const { t } = props;
  const classes = useStyles();

  const [bookOpen1, setOpen1] = useState(3);
  const [bookOpen2, setOpen2] = useState(2);
  const [bookOpen3, setOpen3] = useState(6);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box px={{ lg: 0, xs: 4 }}>
          <Title
            head={t('common:education-landing.explore_title')}
            desc={t('common:education-landing.explore_desc')}
            align={isMobile ? 'center' : 'left'}
            color="primary"
          />
          <div className={classes.rack} id="cat1">
            <div className={classes.categoryTitle}>
              <h3>
                <PaletteIcon />
                &nbsp;
                Lorem Ipsum
              </h3>
              <Button
                href={link.education.product}
                className={classes.viewAll}
                color="primary"
              >
                {t('common:btn_seeall')}
                <ArrowIcon />
              </Button>
            </div>
            <div className={classes.content}>
              {categoriesData.map((item, index) => (
                <Book
                  key={index.toString()}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  href={link.education.productDetail}
                  color={item.color}
                  expand={index === bookOpen1}
                  click={() => setOpen1(index)}
                />
              ))}
            </div>
          </div>
          <div className={classes.rack} id="cat2">
            <div className={classes.categoryTitle}>
              <h3>
                <LanguageIcon />
                &nbsp;
                Lorem Ipsum
              </h3>
              <Button
                href={link.education.product}
                className={classes.viewAll}
                color="primary"
              >
                {t('common:btn_seeall')}
                <ArrowIcon />
              </Button>
            </div>
            <div className={classes.content}>
              {categoriesData.map((item, index) => (
                <Book
                  key={index.toString()}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  href={link.education.productDetail}
                  color={item.color}
                  expand={index === bookOpen2}
                  click={() => setOpen2(index)}
                />
              ))}
            </div>
          </div>
          <div className={classes.rack} id="cat3">
            <div className={classes.categoryTitle}>
              <h3>
                <LocalLibraryIcon />
                &nbsp;
                Lorem Ipsum
              </h3>
              <Button
                href={link.education.product}
                className={classes.viewAll}
                color="primary"
              >
                {t('common:btn_seeall')}
                <ArrowIcon />
              </Button>
            </div>
            <div className={classes.content}>
              {categoriesData.map((item, index) => (
                <Book
                  key={index.toString()}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  href={link.education.productDetail}
                  color={item.color}
                  expand={index === bookOpen3}
                  click={() => setOpen3(index)}
                />
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}

Explore.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(Explore);
