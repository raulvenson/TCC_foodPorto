import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {Link} from 'react-router-dom';

//CSS
import './index.css'

//Imagens
import imageOne from '../../assets/carousel/Italian.jpeg'
import imageTwo from '../../assets/carousel/NaBrasa.jpg'
import imageThree from '../../assets/carousel/HotRoll.jpeg'
import imageFour from '../../assets/carousel/AmboniBurguer.jpg'
import imageFive from '../../assets/cardapioIR/TacaFrutas.jpeg'

//Import do Analytics
import {analytics} from '../../firebase';

export default class SectionCarousel extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 0,
      slides: [
        (<Link to="/cardapioITA" style={{ textDecoration: 'none' }} onClick={this.clickITA} ><img src={imageOne} alt="Anúncio" className="promocao"/> </Link>),
        (<Link to="/cardapioCnB" style={{ textDecoration: 'none' }} onClick={this.clickCnB} ><img src={imageTwo} alt="Anúncio" className="promocao"/> </Link>),
        (<Link to="/cardapioAJ" style={{ textDecoration: 'none' }} onClick={this.clickAJ} ><img src={imageThree} alt="Anúncio" className="promocao"/> </Link>),
        (<Link to="/cardapioAB" style={{ textDecoration: 'none' }} onClick={this.clickAB} ><img src={imageFour} alt="Anúncio" className="promocao"/> </Link>),
        (<Link to="/cardapioIR" style={{ textDecoration: 'none' }} onClick={this.clickIR} ><img src={imageFive} alt="Anúncio" className="promocao"/> </Link>),
      ],
    }
    this.onchange = this.onchange.bind(this);
  }

  clickITA = () => {
    analytics.logEvent('Propaganda', {
			clickDiario: `Italian - ${new Date().toLocaleDateString()}`,
			clickMensal: `Italian - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
  };
  clickCnB = () => {
    analytics.logEvent('Propaganda', {
			clickDiario: `ChurrascoNaBrasa - ${new Date().toLocaleDateString()}`,
			clickMensal: `ChurrascoNaBrasa - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
  };
  clickAJ = () => {
    analytics.logEvent('Propaganda', {
			clickDiario: `AkioJapa - ${new Date().toLocaleDateString()}`,
			clickMensal: `AkioJapa - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
  };
  clickAB = () => {
    analytics.logEvent('Propaganda', {
			clickDiario: `AmboniBurguer - ${new Date().toLocaleDateString()}`,
			clickMensal: `AmboniBurguer - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
  };
  clickIR = () => {
    analytics.logEvent('Propaganda', {
			clickDiario: `IceRozo - ${new Date().toLocaleDateString()}`,
			clickMensal: `IceRozo - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
  };

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
      <Carousel
        value={this.state.value}
        slides={this.state.slides}
        onChange={this.onchange}
        autoPlay={4000}
        stopAutoPlayOnHover
        infinite
      />
      
    </div>
    );
  }
} 