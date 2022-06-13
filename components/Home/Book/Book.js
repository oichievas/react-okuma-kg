import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { withTranslation } from '../../../i18n';
import { useText } from '../../../theme/common';
import useStyles from './book-style';

function Book(props) {
  const classes = useStyles();
  const text = useText();

  const {
    img,
    title,
    desc,
    rating,
    price,
    href,
    color,
    expand,
    click,
    t,
  } = props;

  return (
    <div
      className={clsx(classes.book, expand ? classes.expanded : classes.collapsed)}
      style={{ border: expand ? '2px solid ' + color : 'none' }}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      onClick={click}
    >
      <figure>
        <img src={img} alt={title} />
        <figcaption style={{ background: color }}>
          <span>
            {title}
          </span>
        </figcaption>
      </figure>
      <div className={classes.desc}>
        <div className={classes.text}>
          <Box pb={2}>
            <Typography variant="h6" noWrap className={classes.title}>
              {title}
            </Typography>
          </Box>
          <p className={text.paragraph}>
            {desc}
          </p>
        </div>
        <div>
          <div className={classes.property}>
            {rating > 0 && (
              <Rating
                name="simple-controlled"
                value={rating}
                readOnly
              />
            )}
            {price > 0 && (
              <strong>
                $
                {price}
              </strong>
            )}
          </div>
          <Button href={href} fullWidth className={classes.button} variant="outlined" color="primary">
            {t('common:btn_detail')}
          </Button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  t: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number,
  price: PropTypes.number,
  href: PropTypes.string,
  color: PropTypes.string,
  expand: PropTypes.bool,
};

Book.defaultProps = {
  rating: 0,
  price: 0,
  href: '#',
  color: '#6DB4A7',
  expand: false,
};

export default withTranslation(['common'])(Book);
