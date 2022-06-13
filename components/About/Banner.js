import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HeroBanner from '../HeroBanner';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Banner(props) {
  const classes = useStyles();
  const text = useText();
  const { children } = props;

  return (
    <HeroBanner>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box px={{ sm: 2 }}>
                <div className={classes.text}>
                  <div className={classes.titleLeft}>
                    <h4 className={text.title2}>Pellentesque habitant morbi tristique senectus</h4>
                  </div>
                  <h5 className={text.subtitle2}>
                    {'Multiple lines of text that form the lede,informing new readers quickly and efficiently about what\'s most interesting in this posts contents'}
                  </h5>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box px={{ sm: 5 }}>
                <div className={classes.img}>
                  {children}
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </HeroBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
