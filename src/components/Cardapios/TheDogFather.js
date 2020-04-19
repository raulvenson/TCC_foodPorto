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
import TDFicon from './../../assets/cardapioTDF/thedog.png'

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

class TheDogFather extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `TheDogFather - ${new Date().toLocaleDateString()}`,
        clickMensal: `TheDogFather - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
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
            <img src={TDFicon}  className="img-header" alt="The Dog Father icon"/>
            The DogFather
          </div>    
          <div className="cabecalho icones">
            <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
          </div>
        </Paper>
      </div>
      <div className="content">
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="font-topic">Entradas</div>
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
              <Modal 
                title="Fritas TDF com Bacon e Cheddar"
                desc="Porção de 400g de batatas fritas sequinhas com bacon e muito cheddar."
                price="A partir de R$18,90"
                img="fritas.png"
                path="cardapioTDF" 
                
                /> 
              </Paper>
              <Paper className={classes.root}>            
              <Modal 
                title="Mix TDF"
                desc="200g de onion rings, 200g de mussarela sticks e 300g de mini salsichas artesanais berna, acompanhadas de cheddar, barbecue e mostarda amarela."
                price="A partir de R$38,90"
                img="mix.png"
                path="cardapioTDF" 
                
                /> 
              </Paper>
              <Paper className={classes.root}>            
              <Modal 
                title="Porção de Salsicha Artesanal"
                desc="Salsicha suína e bovina artesanal berna, acompanhada de pão alemão, barbecue e mostarda amarela."
                price="A partir de R$19,90"
                img="porcaoSalsicha.png"
                path="cardapioTDF" 
                
                /> 
              </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <div className="font-topic">Hot Dogs Premium</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <Typography>
              <Paper className={classes.root}>            
                <Modal 
                  title="01 - Fredo"
                  desc="Salsicha TDF, milho e ervilha. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$14,90"
                  img="fredo.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="02 - Vito"
                  desc="Salsicha TDF, chilli e Doritos. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="vito.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="03 - Connie"
                  desc="Salsicha de frango, bacon e milho. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="connie.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="04 - Tom"
                  desc="Salsicha TDF, cheddar e cebola caramelizada. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="tom.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="05 - Luca "
                  desc=" Salsicha TDF, pepperoni, sour cream e vinagrete. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="luca.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="06 - Carmella"
                  desc="Salsicha TDF, tomate, manjericão, azeite e orégano. Acompanha pão, purê de batata, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="carmella.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="07 - Mike"
                  desc="Salsicha TDF, calabresa, sour cream, vinagrete e barbecue. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="mike.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="08 - Corleone"
                  desc="Salsicha TDF envelopada no bacon e cheddar. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$19,90"
                  img="corleone.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="09 - Salvatore"
                  desc="Salsicha de frango e frango grelhado em tiras ao molho cream cheese, mostarda e mel. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="salvatore.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="10 - Virgil"
                  desc="Salsicha vegetal, abobrinha grelhada em rodelas, pimentões e cebola roxa, refogados com molho oriental. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$18,90"
                  img="virgil.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="11 - Moe"
                  desc="Salsicha TDF, costelinha de porco ao molho barbecue e toque de maionese de limão. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$19,90"
                  img="moe.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="12 - Rocco"
                  desc="Salsicha TDF, chilli, bacon em cubos, cheddar e pimenta biquinho. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$23,90"
                  img="rocco.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="13 - Jack"
                  desc="Salsicha TDF, costela suína desfiada, barbecue, bacon em cubos, onion rings e maionese com limão. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$23,90"
                  img="jack.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="14 - Double Corleone"
                  desc="Salsicha TDF, muito bacon e dobro de cheddar. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                  price="A partir de R$23,90"
                  img="doubleCorleone.png"
                  path="cardapioTDF" 
                  /> 
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
                <Modal 
                  title="Linguicinhas TDF"
                  desc="400g de linguicinha artesanal berna recheada de queijo provolone, acompanhada de pão alemão, chimichurri e mostarda escura."
                  price="R$36,90" 
                  img="linguicinha.png"
                  path="cardapioTDF" 
                  /> 
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
                  title="Água mineral"
                  desc="500 ml."
                  price="R$4,00" 
                  img="agua.png"
                  path="generic" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Refrigerantes "
                  desc="Lata (350 ml) - Coca-cola, Coca-cola Zero, Fanta Guaraná, Fanta Laranja, Fanta Uva, Sprite."
                  price="R$4,00" 
                  img="Refrigerantes.png"
                  path="generic" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Soda Italiana"
                  desc="Soda Italiana Monin (400 ml) - Maçã verde, Morango, Tangerina, Cramberry."
                  price="R$7,90" 
                  img="soda.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
              <Paper className={classes.root}>            
                <Modal 
                  title="Sucos"
                  desc="Dell Valle (300 ml) - Laranja, Uva."
                  price="R$6,90" 
                  img="sucos.png"
                  path="cardapioTDF" 
                  /> 
              </Paper>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Sobremesa</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Häagen-Dazs"
                desc="(100ml) - Cookies, Morango, Macadâmia, Doce de Leite, Chocolate Belga."
                price="R$13,90" 
                img="haagen.png"
                path="cardapioTDF" 
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      
      <EnviarMensagem numero="5565999463400" nome="TheDogFather"/>
    
    </div>
  );
};
};

export default withStyles(styles)(TheDogFather);