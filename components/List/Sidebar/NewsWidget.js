import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Paper from '../../Paper';
import useStyles from '../list-style';

function NewsWidget(props) {
  const classes = useStyles();
  const { t } = props;
  const news = [{
    img: imgAPI.photo[13],
    title: 'Vestibulum bibendum nisi eget magna',
    source: 'the-news.com'
  },
  {
    img: imgAPI.photo[14],
    title: 'Quisque a consequat ante',
    source: 'the-news.com'
  },
  {
    img: imgAPI.photo[15],
    title: 'Donec dignissim, odio ac imperdiet luctus',
    source: 'the-news.com'
  },
  {
    img: imgAPI.photo[16],
    title: 'Suspendisse eleifend nunc non',
    source: 'the-news.com'
  },
  {
    img: imgAPI.photo[17],
    title: 'Vestibulum a massa vestibulum',
    source: 'the-news.com'
  }];

  return (
    <Paper title={t('common:blog_post')} icon="ion-ios-paper" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <List component="nav">
          {news.map((item, index) => (
            <ListItem key={index.toString()} button>
              <ListItemAvatar>
                <Avatar src={item.img} className={classes.thumb} variant="rounded" alt="thumb" />
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.source} />
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="center">
          <Button fullWidth color="primary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

NewsWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

NewsWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(NewsWidget);
