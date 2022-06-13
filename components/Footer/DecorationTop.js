import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useStyles from './footer-deco-style';
import imgAPI from '../../public/images/imgAPI';

function DecorationTop() {
  const classes = useStyles();
  return (
    <div className={classes.topDeco}>
      <ScrollAnimation animateOnce animateIn="zoomInShort" delay={200} offset={-300} duration={0.3}>
        <img
          src={imgAPI.education[44]}
          data-2d={imgAPI.education[43]}
          data-3d={imgAPI.education[44]}
          className="img-2d3d"
          alt="footer"
        />
      </ScrollAnimation>
    </div>
  );
}

export default DecorationTop;
