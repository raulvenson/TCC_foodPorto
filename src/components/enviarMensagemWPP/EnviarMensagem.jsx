import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

import Whats_qld from '../../assets/whats_.png';

import '../Cardapios/TheDogFather.css'

import {analytics} from '../../firebase'

class EnviarMensagem extends Component {

	componentDidMount() {
		const { nome } = this.props;
		analytics.logEvent('whatsApp_Click', {
			clickDiario: `${nome} - ${new Date().toLocaleDateString()}`,
			clickMensal: `${nome} - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
		});
	  }
	
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