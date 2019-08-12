import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LeBrutoImg from './../../assets/lebruto.jpg'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
// const classes = useStyles();
class ListaRestaurantes extends Component {
  
  render(){
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          
          image={LeBrutoImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Le Bruto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
						Variedade em hambúrgueres com toque gourmet e opção em saladas e batatas, sobremesas e decoração rústica.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Menu!
        </Button>
        
      </CardActions>
    </Card>
	);
	}
}

export default ListaRestaurantes;