import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Whats_qld from '../../assets/whats_.png';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'
import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'

import IceRozoLogo from './../../assets/cardapioIR/iceRozo.png'


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
    backgroundColor: '#ffc025',
  },
}));

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

export default function CustomizedExpansionPanels() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('  ');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="cardapio">
      <div className="header">
      <Paper className={classes.root}>
        <div className="font-lista cabecalho">
          <img src={IceRozoLogo}  className="img-header" alt="General Mex logo"/>
          Ice Rozo
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
        <div className="cabecalho icones">
          <AvaliacaoModal className="avaliacao" />
        </div>
      </Paper>
      </div>
      <div className="content">
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Super Taças</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça Suja com Churros"
                desc=""
                price="R$25,00"
                img="TacaSuja.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça Sorvete Quente"
                desc=""
                price="R$22,00"
                img="SorveteQuente.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça Decorada Mix Chocolates"
                desc=""
                price="R$22,00"
                img="TacaSuja.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça Decorada Mix Frutas"
                desc=""
                price="R$22,00"
                img="TacaSuja2.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça Decorada com churros"
                desc=""
                price="R$28,00"
                img="TacaSuja2.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça de Salada de Frutas"
                desc="Kiwi, Banana, Morango, Manga, Chantilly com Leite Ninho e Petit Suisse"
                price="R$14,00"
                img="TacaFrutas.jpeg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Sorvete Thailandês</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Sorvete na Chapa"
                desc=""
                price="R$13,00"
                img="SorveteThailandes.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <h1>Escolha até 2 sabores:</h1>
              <h2>Morango<br/>Maracujá<br/>Leitinho (pó)<br/>Ovo Maltine<br/>Leite Condensado<br/>Açaí<br/>Capuccino<br/>Banana<br/>Sonho de Valsa<br/>Oreo/Negresco<br/>Bis<br/>Kiwi<br/>Doce de Leite<br/>Amendoin<br/>Goiabada<br/>Queijo com Goiabada<br/>Prestigio<br/>Flocos<br/>Cacau 50%<br/>Côco</h2> 
            </Paper>
            
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Açaí no Copo</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="300ML - 2 adicionais"
                desc="Adicionais Extras = R$2,00 (Morango, Banana, Kiwi, Leite em Pó, Leite condensado, Ovo Maltine, Nutella, Granola, Côco, Granulado, Confete, Mel, Gotas de Chocolate, Doce de Leite, Bis e Chantilli)"
                price="R$12,00" 
                img="TacaSuja2.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="500ML - 3 adicionais"
                desc="Adicionais Extras = R$2,00 (Morango, Banana, Kiwi, Leite em Pó, Leite condensado, Ovo Maltine, Nutella, Granola, Côco, Granulado, Confete, Mel, Gotas de Chocolate, Doce de Leite, Bis e Chantilli)"
                price="R$17,00" 
                img="TacaSuja2.png"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Especiais</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Vaca Preta"
                desc=""
                price="R$18,00" 
                img="semImagem.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Sorvete Assado"
                desc=""
                price="R$18,00" 
                img="SorveteAssado.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Feijoada Ice"
                desc=""
                price="R$18,00" 
                img="Feijoada.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Banana Split"
                desc=""
                price="R$18,00" 
                img="BananaSplit.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Burritos Candy"
                desc=""
                price="R$18,00" 
                img="BurritosCandy.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Grand Gateau"
                desc=""
                price="R$20,00" 
                img="semImagem.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Churritos no Cone</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Doce de Leite"
                desc=""
                price="R$16,00" 
                img="ChurritosNoCone.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price="R$16,00" 
                img="ChurritosNoCone.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Misto"
                desc=""
                price="R$16,00" 
                img="ChurritosNoCone.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nutella"
                desc=""
                price="R$16,00" 
                img="ChurritosNoCone.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
        <div className="font-topic">Churritos no Prato (Porção Grande)</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Doce de Leite"
                desc=""
                price="R$25,00" 
                img="ChurritosNoPrato.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price="R$25,00" 
                img="ChurritosNoPrato.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Misto 3 Sabores"
                desc=""
                price="R$26,00" 
                img="ChurritosNoPrato.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nutella"
                desc=""
                price="R$26,00" 
                img="semImagem.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
        <div className="font-topic">Churros</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Doce de Leite ou Chocolate"
                desc=""
                price="R$5,00" 
                img="Churros.jpeg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Combo de 3 unidades"
                desc=""
                price="R$13,00" 
                img="Churros.jpeg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Especial de Nutella"
                desc=""
                price="R$7,00" 
                img="Churros.jpeg"
                path="cardapioIR" 
              /> 
            </Paper>  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
        <div className="font-topic">Churros Gourmet</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Churros Gourmet"
                desc=""
                price="R$8,00" 
                img="ChurrosGourmet2.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <h1>Recheio</h1>
              <h2>Chocolate ou Doce de Leite</h2>
              <h1>Cobertura</h1>
              <h2>Doce de Leite, Chocolate, Nutella, Beijinho, Brigadeiro e Goiabada.</h2>
              <h1>Confeito</h1>
              <h2>Morango, Kiwi, Leitinho (pó), Côco, Granulado, Amendoin, Banana e Confete.</h2>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
        <div className="font-topic">Milk Shake</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="300ML"
                desc="Morango, Kiwi, Banana ou Marshmellow"
                price="R$10,00" 
                img="MilkShake1.png"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="500ML"
                desc="Morango, Kiwi, Banana, Marshmellow"
                price="R$14,00" 
                img="MilkShake2.png"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <ExpansionPanelSummary aria-controls="panel10d-content" id="panel10d-header">
        <div className="font-topic">Fondue de Chocolate</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Pequeno"
                desc="Sabores: Ovomaltine, Morango, Oreo, Amendoin ou Leitinho"
                price="R$25,00" 
                img="Fondue.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Grande"
                desc="Sabores: Ovomaltine, Morango, Oreo, Amendoin ou Leitinho"
                price="R$35,00" 
                img="Fondue.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary aria-controls="panel11d-content" id="panel11d-header">
        <div className="font-topic">Cestinha Waffer</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Simples"
                desc="Sabores de Sorvete no Painel"
                price="R$12,00" 
                img="semImagem.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Trufada"
                desc="Sabores de Sorvete no Painel "
                price="R$14,00" 
                img="semImagem.jpg"
                path="cardapioIR" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      <Grid container justify={"center"} className="footer">
        <a href="https://api.whatsapp.com/send?phone=5565999271048&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" >
          <img className="wpp" src={Whats_qld} alt="link para chat WhatsApp"/>
        </a> 
      </Grid>
    
    </div>
  );
}