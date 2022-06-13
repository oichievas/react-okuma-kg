import React from 'react';
import useStyles from './footer-deco-style';
import imgAPI from '../../public/images/imgAPI';

function DecorationBottom() {
  const classes = useStyles();
  return (
    <div className={classes.bottomDeco}>
      <div className={classes.leftDeco}>
        <img
          src={imgAPI.education[40]}
          data-2d={imgAPI.education[39]}
          data-3d={imgAPI.education[40]}
          className="img-2d3d"
          alt="footer"
        />
      </div>
      <div className={classes.rightDeco}>
        <img
          src={imgAPI.education[42]}
          data-2d={imgAPI.education[41]}
          data-3d={imgAPI.education[42]}
          className="img-2d3d"
          alt="footer"
        />
      </div>
    </div>
  );
}

export default DecorationBottom;
