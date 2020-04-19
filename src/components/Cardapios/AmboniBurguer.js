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
import AmboniLogo from './../../assets/cardapioAB/AmboniBurguerLogo.png'

// Envia Mensagem WhatsApp
import EnviarMensagem from '../enviarMensagemWPP/EnviarMensagem'

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

class AmboniBurguer extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `AmboniBurguer - ${new Date().toLocaleDateString()}`,
        clickMensal: `AmboniBurguer - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
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
            <img src={AmboniLogo}  className="img-header" alt="Amboni Burguer logo"/>
            Amboni Burguer
          </div>    
          <div className="cabecalho icones">
            <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
          </div>
          {/* <div className="cabecalho icones">
            <AvaliacaoModal className="avaliacao" />
          </div> */}
        </Paper>
      </div>
      <div className="content">
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="font-topic">Fast Foods</div>
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
              <Modal 
                title="X Burguer"
                desc="Presunto, mussarela, tomate e hamburguer."
                price="R$10,00"
                img="x-burguer.png"
                path="cardapioAB"                 
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Salada"
                  desc="Presunto, mussarela, tomate, alface, milho e hamburguer."
                  price="R$12,00"
                  img="x-salada.png"
                  path="cardapioAB"  
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Natural"
                  desc="Pão baguete, peito de peru, mussarela, cenoura ralada, tomate, alface e molho à escolha."
                  price="R$12,00"
                  img="x-natural.jpg"
                  path="cardapioAB"  
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Egg"
                  desc="Presunto, mussarela, tomate, alface, milho, ovo e hamburguer."
                  price="R$13,00"
                  img="X-Egg.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Burguer Duplo"
                  desc="Presunto, mussarela, tomate, alface, milho e dois hamburguer."
                  price="R$14,00"
                  img="x-burguer-duplo.png"
                  path="cardapioAB"
                /> 
              </Paper>            
              <Paper className={classes.root}>            
                <Modal 
                  title="X Calabresa"
                  desc="Presunto, mussarela, tomate, alface, milho, calabresa e hamburguer."
                  price="R$15,00"
                  img="x-calabresa.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Bacon"
                  desc="Presunto, mussarela, tomate, alface, milho, bacon e hamburguer."
                  price="R$16,00"
                  img="x-bacon.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="X Turbinado"
                  desc="Presunto, mussarela, tomate, alface, milho, bacon, ovo, calabresa, ovo salsicha e hamburguer."
                  price="R$18,00"
                  img="x-turbinado.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <div className="font-topic">Artesanais (Todos acompanham fritas)</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
                <Modal 
                  title="Flash Burguer Kids"
                  desc="Pão, hambúrguer de carne, mussarela e molho à escolha"
                  price="R$15,00"
                  img="flash-burguer-kids.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Coringa Burguer"
                  desc="Pão, hambúrguer de carne, mussarela, tomate, alface e molho à escolha"
                  price="R$17,00"
                  img="coringa-burguer.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Thanos Gourmet"
                  desc="Pão, filé de frango, catupiry, mussarela, tomate, alface e molho à escolha"
                  price="R$18,00"
                  img="thanos-gourmet.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Robin Burguer"
                  desc="Pão, hambúrguer de carne, ovo, mussarela, tomate, alface e molho à escolha"
                  price="R$18,00"
                  img="robin-burguer.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Thor Onion Gourmet"
                  desc="Pão, hambúrguer de carne, anéis de cebola crocantes, mussarela, tomate e molho à escolha"
                  price="R$20,00"
                  img="thor-onion.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Ultron Bacon"
                  desc="Pão, hambúrguer de carne, bacon em tiras, mussarela, tomate, alface e molho à escolha"
                  price="R$22,00"
                  img="ultron-bacon.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Yoda Gourmet"
                  desc="Pão, hambúrguer de carne, fatias de banana, mussarela, tomate, alface e molho à escolha"
                  price="R$22,00"
                  img="yoda-gormet.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Te Fiti Gourmet"
                  desc="Pão, hambúrguer de carne, rodelas de abacaxi, bacon em tirass, mussarela e molho à escolha"
                  price="R$23,00"
                  img="te-fiti-gourmet.jpg"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Superman Double"
                  desc="Pão, dois hambúrgueres de carne, mussarela, queijo cheddar, tomate, alface e molho à escolha"
                  price="R$25,00"
                  img="superman-double.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Espectro Gourmet"
                  desc="Pão, hambúrgueres de carne, bacon em tiras, rodelas de cebola crocantes, queijo cheddar e molho à escolha"
                  price="R$27,00"
                  img="espectro-gormet.png"
                  path="cardapioAB"
                /> 
              </Paper>
              <Paper className={classes.root}>            
              <h1>Molhos Especiais</h1>
              <h2>Creme de Alho - Barbecue - Molho Refrescante</h2> 
            </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>      
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <div className="font-topic">Porções</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
                <h1>Batata Simples</h1>
                <h2>Pequena 150g (R$6,00)</h2>
                <h2>Média 300g (R$10,00)</h2>
                <h2>Grande 600g (R$18,00)</h2>
              </Paper>
              <Paper className={classes.root}>            
                <h1>Batata Cheddar com Bacon</h1>
                <h2>Pequena 150g (R$10,00)</h2>
                <h2>Média 300g (R$15,00)</h2>
                <h2>Grande 600g (R$25,00)</h2>
              </Paper>
              <Paper className={classes.root}>            
                <h1>Batata Torre</h1>
                <h2>400g (R$25,00)</h2>
                <h2>800g (R$35,00)</h2>
                <h2>(Batata palito, queijo cheddar, queijo mussarela, bacon e calabresa)</h2>
              </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Bebidas</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
                <Modal 
                  title="Refrigerantes "
                  desc=""
                  price="R$4,00" 
                  img="Refrigerantes.png"
                  path="generic" 
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Sucos"
                  desc=""
                  price="R$5,00" 
                  img="sucos.png"
                  path="generic" 
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Água sem Gás"
                  desc=""
                  price="R$3,00" 
                  img="agua.png"
                  path="generic" 
                /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Água com Gás"
                  desc=""
                  price="R$4,00" 
                  img="agua.png"
                  path="generic" 
                /> 
              </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      
      <EnviarMensagem numero="5565999053380" nome="AmboniBurguer"/>
    
    </div>
  );
}
};

export default withStyles(styles)(AmboniBurguer);