import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

import Whats_qld from '../../assets/whats_.png';

import '../Cardapios/TheDogFather.css'

class EnviarMensagem extends Component {

	enviarMensagem = () => {
		var celular = this.props.numero;
		
		var texto = "Olá, gostaria de fazer um pedido!\n\n\n*#OnMenu*";
		texto = window.encodeURIComponent(texto);
		
		window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
	}
	render(){
		return(
			<Grid container justify={"center"} className="footer">  
				<img onClick={this.enviarMensagem} className="wpp" src={Whats_qld} alt="link para chat WhatsApp"/>     
			</Grid>
		);
}
}

export default EnviarMensagem;