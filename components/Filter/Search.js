import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { withTranslation } from '~/i18n';
import HeroBanner from '../HeroBanner';
import Title from '../Title';
import useStyles from './filter-style';

function Search(props) {
  const { t, value, updateValue } = props;
  const classes = useStyles();

  const handleUpdateValue = event => {
    updateValue(event.target.value);
  };

  return (
    <HeroBanner>
      <section className={classes.searchBanner}>
        <Container maxWidth="md">
          <Grid container alignItems="center" className={classes.searchBox}>
            <Grid item sm={12}>
              <Title head={t('common:list_title')} desc={t('common:list_subtitle')} color="secondary" align="center" />
              <div className={classes.search}>
                <FormControl component="form">
                  <OutlinedInput
                    value={value}
                    onChange={(e) => handleUpdateValue(e)}
                    className={classes.input}
                    placeholder={t('common:list_search')}
                    startAdornment={<SearchIcon />}
                    labelWidth={0}
                  />
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </HeroBanner>
  );
}

Search.propTypes = {
  t: PropTypes.func.isRequired,
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

Search.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Search);
