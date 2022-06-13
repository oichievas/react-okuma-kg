import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';
import imgAPI from '~/public/images/imgAPI';
import DecoBottom from '../Footer/DecorationBottom';

export default function PageDeco(props) {
  const classes = useStyles();
  const { extend } = props;
  return (
    <div className={classes.pageDeco}>
      <div className={classes.topDeco}>
        {extend && (
          <img
            src={imgAPI.education[44]}
            data-2d={imgAPI.education[43]}
            data-3d={imgAPI.education[44]}
            className="img-2d3d"
            alt="footer"
          />
        )}
      </div>
      <DecoBottom />
    </div>
  );
}

PageDeco.propTypes = {
  extend: PropTypes.bool
};

PageDeco.defaultProps = {
  extend: false
};
