import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Patch from '../files/Patch.PNG';
import pdr from '../files/Oregon_State_University-2019-PDR-Report.pdf';
import cdr from '../files/OSU_USLI_2019_CDR.pdf';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
	paddingTop: '50px',
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('/Users/Ryanwallerius/USLI-Website-2019/src/components/files/Patch.PNG')}
          title="OSU PDR"
					style={styles.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PDR
          </Typography>
          <Typography component="p">
            Oregon State's USLI Preliminary Design Review
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={pdr} download="Oregon State PDR">Download</a>
        </Button>
      </CardActions>

			<CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('/Users/Ryanwallerius/USLI-Website-2019/src/components/files/Patch.PNG')}
          title="OSU CDR"
					style={styles.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CDR
          </Typography>
          <Typography component="p">
            Oregon State's USLI Critical Design Review
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={cdr} download="Oregon State CDR">Download</a>
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
