import React, { Component } from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'

// Css
import './TheDogFather.css'

// Logo
import CnBlogo from './../../assets/cardapioCnB/NaBrasaLogo.png'

// Envia Mensagem WhatsApp
// import EnviarMensagem from '../enviarMensagemWPP/EnviarMensagem'

// Importa o Analytics
import { analytics } from '../../firebase';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
    backgroundColor: '#ffc025',
  },
});

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

class ChurrascoNaBrasa extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `ChurrascoNaBrasa - ${new Date().toLocaleDateString()}`,
        clickMensal: `ChurrascoNaBrasa - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
      });
    }, 5000 /* tempo in ms */ );
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    // Antes do componente ser desmontado
    const { timeoutId } = this.state;
    // cancela o tempo de 5s
    clearTimeout(timeoutId);
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setExpanded(newExpanded ? panel : false);
  };

  setExpanded = (value) => {
    this.setState({
      expanded: value
    })
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

  return (
    <div className="cardapio">
      <div className="header">
      <Paper className={classes.root}>
        <div className="font-lista cabecalho">
          <img src={CnBlogo}  className="img-header" alt="Churrasco na Brasa icon"/>
          Churrasco na Brasa
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
        
      </Paper>
      </div>
      <div className="content">
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Espetinhos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Carne (Fraldinha)"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$15,00 - Completo R$23,00"
                img="Carne.jpeg"
                path="cardapioCnB"              
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$12,00 - Completo R$20,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango com Bacon"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$12,00 - Completo R$20,00"
                img="FrangoBacon.jpeg"
                path="cardapioCnB"             
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Cupim Mexicano"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$15,00 - Completo R$23,00"
                img="CupimMexicano.jpeg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Picanha"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$25,00 - Completo R$33,00"
                img="Picanha.jpeg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Queijo"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Calabresa"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Porções</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Picanha (450g)"
                desc="Picanha acebolado com mandioca cozida."
                price="R$70,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Filé Mignon (450g)"
                desc="Filé Mignon acebolado com mandioca cozida."
                price="R$70,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Alcatra (450g)"
                desc="Alcatra acebolado com mandioca cozida."
                price="R$55,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Mandioca Frita (450g)"
                desc=""
                price="R$15,00"
                img="MandiocaFrita.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Calabresa (450g)"
                desc="Calabresa acebolada"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Batata Frita (400g)"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>     
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerante Lata"
                desc=""
                price="R$4,00"
                img="Refrigerantes.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água Mineral"
                desc=""
                price="R$4,00"
                img="agua.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água Mineral com Gás"
                desc=""
                price="R$4,00"
                img="agua.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Suco lata (Del Valle)"
                desc=""
                price="R$4,00"
                img="DelValle.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Aquárius Fresh"
                desc=""
                price="R$5,00"
                img="AquariusFresh.png"
                path="generic" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    
    </div>
  );
};
};

export default withStyles(styles)(ChurrascoNaBrasa);