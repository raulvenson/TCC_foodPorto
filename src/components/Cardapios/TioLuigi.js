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
import TioLuigiLogo from './../../assets/cardapioTL/TioLuigiLogo.png'

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

class TioLuigi extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `TioLuigi - ${new Date().toLocaleDateString()}`,
        clickMensal: `TioLuigi - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
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
          <img src={TioLuigiLogo}  className="img-header" alt="Tio Luigi logo"/>
          Tio Luigi
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
      </Paper>
      </div>
      <div className="content">
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Tamanhos</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>    
            <Paper className={classes.root}>            
              <div className="font-modal">Pequena (P)</div>
              <h2>4 Pedaços e 2 Sabores</h2>
              <div className="preco">R$25,00</div>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Média (M)</div>
              <h2>8 Pedaços e 2 Sabores</h2>
              <div className="preco">R$40,00</div>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Grande (G)</div>
              <h2>12 Pedaços e 3 Sabores</h2>
              <div className="preco">R$50,00</div>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Extra Grande (GG)</div>
              <h2>26 Pedaços e 4 Sabores</h2>
              <div className="preco">R$70,00</div>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Pizzas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Portuguesa"
                desc="Molho de Tomate, Muçarela, Presunto, Ovo, Tomate, Cebola, Palmito, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Strogonoff de Carne"
                desc="Molho de Tomate, Muçarela, Strogonoff, Azeitona, Orégano e Batata Palha."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Picanha"
                desc="Molho de Tomate, Muçarela, Picanha, Cebola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nordestina"
                desc="Molho de Tomate, Muçarela, Carne de Sol, Azeitona, Orégano e Abacaxi."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Calabresa"
                desc="Molho de Tomate, Muçarela, Calabresa, Cebola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Frango com Catupiry"
                desc="Molho de Tomate, Muçarela, Frango Desfiado, Catupiri, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Parmegiana de Carne"
                desc="Molho de Tomate, Muçarela, Filé de Carne, Tomate, Creme de Leite, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Marguerita"
                desc="Molho de Tomate, Muçarela, Tomate, Manjericão e Azeitona."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Rúcula com Tomate Seco"
                desc="Molho de Tomate, Muçarela, Rúcula, Tomate Seco e Azeitona."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="A Moda da Casa"
                desc="Molho de Tomate, Muçarela, Frango, Bacon, Champignon, Calabresa, Presunto, Milho, Tomate, Creme de Leite, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Moda do Chefe"
                desc="Molho de Tomate, Muçarela, Milho, Bacon, Calabresa, Cebola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Atum"
                desc="Molho de Tomate, Muçarela, Atum, Cebola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Atum com Rúcula e Tomate Seco"
                desc="Molho de Tomate, Muçarela, Atum, Rúcula, Tomate Seco, Cebola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Tio Luigi"
                desc="Molho de Tomate, Muçarela, Presunto, Ovos, Milho, Tomate, Palmito e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="4 Queijos"
                desc="Molho de Tomate, Muçarela, Catupiry, Provolone, Gorgonzola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="3 Queijos"
                desc="Molho de Tomate, Muçarela, Parmesão, Gorgonzola, Azeitona e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Mexicana"
                desc="Molho de Tomate, Muçarela, Frango, Tomate, Calabresa, Pimenta Calabresa e Orégano."
                price=""
                img="Pizza.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Pizzas Doces</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Banana com Canela"
                desc=""
                price=""
                img="PizzaDoce.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Prestígio"
                desc=""
                price=""
                img="PizzaDoce.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price=""
                img="PizzaDoce.jpg"
                path="cardapioTL" 
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Bordas Recheadas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <div className="font-modal">Catupiry</div>
              <h2>P - R$2,00 &nbsp; &nbsp; M - R$4,00</h2>
              <h2>G - R$6,00 &nbsp; &nbsp; GG - R$10,00</h2>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Cheddar</div>
              <h2>P - R$2,00 &nbsp; &nbsp; M - R$4,00</h2>
              <h2>G - R$6,00 &nbsp; &nbsp; GG - R$10,00</h2>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Chocolate</div>
              <h2>P - R$2,00 &nbsp; &nbsp; M - R$4,00</h2>
              <h2>G - R$6,00 &nbsp; &nbsp; GG - R$10,00</h2>
            </Paper>
            <Paper className={classes.root}>            
              <div className="font-modal">Philadelphia</div>
              <h2>P - R$2,00 &nbsp; &nbsp; M - R$4,00</h2>
              <h2>G - R$6,00 &nbsp; &nbsp; GG - R$10,00</h2>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Água s/ Gás"
                desc=""
                price="" 
                img="agua.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água c/ Gás"
                desc=""
                price="" 
                img="agua.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerantes"
                desc=""
                price="" 
                img="Refrigerantes.png"
                path="generic" 
              /> 
            </Paper>          
            <Paper className={classes.root}>            
              <Modal 
                title="Coca Cola Litro"
                desc=""
                price="" 
                img="CocaLitro.png"
                path="cardapioTL" 
              /> 
            </Paper> 
            <Paper className={classes.root}>            
              <Modal 
                title="Fanta Litro"
                desc=""
                price="" 
                img="FantaLitro.png"
                path="cardapioTL" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      {/* <EnviarMensagem numero="5565998526577" /> */}
    </div>
  );
};
};

export default withStyles(styles)(TioLuigi);