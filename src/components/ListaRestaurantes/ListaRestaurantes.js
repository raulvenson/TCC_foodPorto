import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

import LeBrutoImg from './../../assets/lebruto.png'
import TheDogFatherImg from './../../assets/theDogFather.jpg'

import './listaRestaurantes.css'
import Header from '../Header/Header';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    <div>
      <Header/>
    <div className="restaurante">
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Card className="cartao">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="10"
          image={TheDogFatherImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The DogFather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            O melhor em Premium Hot Dogs, cerveja gelada, Milk Shakes e muito mais. Traga a sua família e amigos para momentos de descontração garantidos! *Veja o Cardápio*
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
    <Link to="/cardapioLB" style={{ textDecoration: 'none' }}>
    <Card className="cartao">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="10"
          image={LeBrutoImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Le Bruto
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Variedade em hambúrgueres com toque gourmet e opção em saladas e batatas, sobremesas e decoração rústica. *Veja o Cardápio*
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
  );
}