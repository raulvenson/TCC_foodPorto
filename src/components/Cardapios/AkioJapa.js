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
import AkioJapaLogo from './../../assets/cardapioAJ/AkioJapaLogo.png'

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
          <img src={AkioJapaLogo}  className="img-header" alt="General Mex logo"/>
          Akio Japa
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
          <div className="font-topic">Entradas</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="01 - Sunomono"
                desc="Salada de pepino japonês com gergilin."
                price="R$7,90"
                img="semImagem.jpg"
                path="cardapioGM"               
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="02 - Bolinho de peixe (8 un)"
                desc=""
                price="R$18,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="03 - Ceviche"
                desc="Salmão, Peixe branco."
                price="R$21,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="04 - Ceviche Camarão"
                desc="Salmão, Peixe branco e Camarão."
                price="R$25,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="05 - Ceviche Especial"
                desc="Frutos do mar, 10 lâminas de peixe branco, 10 lâminas de salmão ao molho especial."
                price="R$59,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="06 - Shimeji na Manteiga"
                desc="Shimeji puxado na manteiga com toque de saquê, shoyu e gergilin."
                price="R$18,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">JOE (02 UN)</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="07 - Joe Salmão"
                desc="Enrolado de salmão, cream cheese, cebolinha e salmão batido."
                price="A partir de R$6,90"
                img="semImagem.jpg"
                path="cardapioGM"    
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="08 - Mussarela"
                desc="Enrolado de salmão, cream cheese, mussarela e couve frito."
                price="A partir de R$7,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="09 - Salmão e Doritos"
                desc="Enrolado de salmão, cream cheese, cebolinha e doritos."
                price="A partir de R$9,90"
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="10 – Joe Geleia"
                desc="Enrolado de salmão, cream cheese, pimenta ou morango."
                price="A partir de R$6,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
             <Paper className={classes.root}>            
              <Modal 
                title="11 – Joe Tataki"
                desc="Enrolado de salmão tostado no maçarico, azeite de oliva, pimenta tailandesa, tarê e cebolinha."
                price="A partir de R$7,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">JOE ESPECIAIS (08 UN)</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="12 – Seleção Joe Especiais"
                desc="Par de crispy, par de gambei, par de crispy doce e par de doritos."
                price="A partir de R$21,90"
                img="semImagem.jpg"
                path="cardapioGM"  
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="13 – Gambei"
                desc="Arroz, salmão, cream cheese e couve frita."
                price="A partir de R$21,90"
                img="semImagem.jpg"
                path="cardapioGM"    
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="14 – Crispy"
                desc="Salmão, arroz, cream cheese e couve frita."
                price="A partir de R$21,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="15 – Goiabada"
                desc="Goiabada, cream cheese, morango e chocolate."
                price="A partir de R$19,90"
                img="semImagem.jpg"
                path="cardapioGM"
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="16 – Akiojapa (flambado)"
                desc="Salmão, arroz e tataki de salmão flambado."
                price="A partir de R$24,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="17 – Camarão"
                desc="Salmão, arroz, cream cheese e camarão."
                price="A partir de R$28,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="18 – Hossomaki Skin"
                desc="Enrolado de arroz com alga e recheado com a pele de salmão grelhado."
                price="A partir de R$14,90"
                img="semImagem.jpg"
                path="cardapioGM"       
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="19 – Salmão"
                desc="Enrolado de arroz com alga recheado com salmão."
                price="A partir de R$15,90"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="20 – Kani"
                desc="Enrolado de arroz com alga recheado com kani."
                price="A partir de R$14,00"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="21 – Pepino "
                desc="Enrolado de arroz com alga e recheado com pepino."
                price="A partir de R$14,00"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="22 – Camarão"
                desc="Enrolado de arroz com alga e recheado com camarão na manteiga."
                price="A partir de R$17,90"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
        <div className="font-topic">Uramaki (10 UN)</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="23 – Califórnia"
                desc="Enrolado de arroz por fora com recheio de manga, pepino e kani."
                price="A partir de R$14,90"
                img="semImagem.jpg"
                path="cardapioGM"    
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="24 – Filadélfia "
                desc="Enrolado de arroz por fora com recheio de salmão, cream cheese e cebolinha."
                price="A partir de R$15,90"
                img="semImagem.jpg"
                path="cardapioGM"       
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="25 – Ebi"
                desc="Enrolado de arroz por fora com camarão, cream cheese, cebolinha e com a capa de salmão."
                price="A partir de R$23,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="26 – Kani "
                desc="Enrolado de arroz por fora com cream cheese e kani."
                price="A partir de R$16,90"
                img="semImagem.jpg"
                path="cardapioGM"       
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="27 – Alcapone"
                desc="Enrolado de arroz por fora com recheio de rúcula, tomate seco e cream cheese."
                price="A partir de R$13,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="28 – Furai "
                desc="Enrolado de arroz por fora com recheio de salmão empanado frito e cream cheese."
                price="A partir de R$16,90"
                img="semImagem.jpg"
                path="cardapioGM"         
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="29 – Romeu e Julieta"
                desc="Enrolado de arroz por fora com recheio de goiabada, morango e cream cheese."
                price="A partir de R$17,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="30 – Urakami Especial"
                desc="Enrolado de arroz por fora com recheio de salmão, cream cheese, cebolinha e com a capa de salmão."
                price="A partir de R$20,90"
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="31 – Camarão"
                desc="Enrolado de arroz por fora com recheio de camarão empanado e cream cheese."
                price="A partir de R$21,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="32 – Skin"
                desc="Enrolado de arroz por fora com recheio de cream cheese e pele de salmão grelhado."
                price="A partir de R$16,90"
                img="semImagem.jpg"
                path="cardapioGM"
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Nigiri (02 un)</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="46 – Nigiri grelhado"
                desc="Bolinho de arroz envolto de salmão grelhado."
                price="A partir de R$6,90"
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="47 – Nigiri"
                desc="Bolinho de arroz , rúcula e tomate seco."
                price="A partir de R$6,00"  
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="48 – Nigiri de salmão"
                desc="Bolinho de arroz e capa de salmão."
                price="A partir de R$4,50"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="49 – Nigiri peixe branco"
                desc="Bolinho de arroz e capa de peixe branco."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="50 – Nigiri kani"
                desc="Bolinho de arroz e kani."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="51 – Nigiri skin"
                desc="Bolinho de arroz e pele de salmão grelhado."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Yakissoba</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="52 – Yakissoba de carne"
                desc="Macarrão com legumes ao shoyu, com carne."
                price="A partir de R$24,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="53 – Yakissoba de frango"
                desc="Macarrão com legumes ao shoyu, com frango."
                price="A partir de R$24,90"
                img="semImagem.jpg"
                path="cardapioGM"    
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="54 – Yakissoba misto"
                desc="Macarrão com legumes ao shoyu, frango e carne."
                price="A partir de R$26,90"
                img="semImagem.jpg"
                path="cardapioGM"       
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="55 – Yakissoba de camarão"
                desc="Macarrão com legumes ao shoyu, com camarão."
                price="A partir de R$26,90"
                img="semImagem.jpg"
                path="cardapioGM"         
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="56 – Yakissoba frutos do mar"
                desc="Macarrão com legumes ao shoyu com frutos do mar.."
                price="A partir de R$28,90"
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="57 – Yakissoba vegetariano"
                desc="Macarrão com legumes ao shoyu."
                price="A partir de R$21,90"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Tempura</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="58 – Legumes"
                desc="Legumes e empanado frito."
                price="A partir de R$19,90"
                img="semImagem.jpg"
                path="cardapioGM"       
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="59 – Sorvete"
                desc="Sorvete de creme, massa doce e empanado frito."
                price="A partir de R$24,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="60 – Camarão"
                desc="Legumes, empanado frito e camarão."
                price="A partir de R$25,90"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="61 – Sobá"
                desc="Macarrão ao shoyu, ovos e carne."
                price="A partir de R$27,90"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Tempanhaky</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="62 - Carne"
                desc=" Legumes ao shoyu com arroz de sushi (Gohan) carne."
                price="A partir de R$16,90"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="62 - Salmão "
                desc="Legumes ao shoyu com arroz de sushi (Gohan) salmão."
                price="A partir de R$16,90"
                img="semImagem.jpg"
                path="cardapioGM"         
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Combinados</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="63 – Mini Salmão (12 peças)"
                desc="5 sashimis, 3 urakamis Filadélfia, 2 hossomakis e 2 nigiris."
                price="A partir de R$30,00"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="64 – Combo 1 pessoa (22 peças) "
                desc="6 sashimis de salmão, 6 sashimis de peixe branco, 2 nigiris de peixe branco, 4 nigiris de salmão, 4 joe de salmão."
                price="A partir de R$49,00"
                img="semImagem.jpg"
                path="cardapioGM"      
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="65 – Combo 2 pessoas (40 peças)"
                desc="10 sashimis de salmão, 5 sashimis de polvo, 4 niguiris de salmão, 4 niguiris skin, 4 niguiris kani, 4 joe salmão, 2 uramakis Filadéldia e hot roll Filadélfia."
                price="A partir de R$95,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="66 - Combo 3 pessoas (78 peças)"
                desc="16 sashimis variados, 8 niguiris variados, 8 joe variados, 8 urakamis Filadélfia, 8 hosomakis de salmão, 10 hot roll variados, 10 urakamis skin e 10 urakamis salmão grelhado"
                price="A partir de R$180,00"
                img="semImagem.jpg"
                path="cardapioGM"            
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="67 – Combo Família (100 peças)"
                desc="16 sashimis variados, 12 niguiris variados, 20 urakamis Filadélfia, 15 joe de salmão, 10 hosomakis de salmão, 15 hot roll variados e  10 urakamis skin."
                price="A partir de R$235,00"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Sashimis</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="68 – Salmão"
                desc="10 unidades."
                price="A partir de R$28,00"
                img="semImagem.jpg"
                path="cardapioGM"          
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="69 – Peixe branco "
                desc="10 unidades (tilápia)."
                price="A partir de R$24,90"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="70 – Seleção Sashimi (24 cortes)"
                desc="12 salmões, 6 peixes branco e 6 polvos."
                price="A partir de R$150,00"
                img="semImagem.jpg"
                path="cardapioGM"   
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="71 – Salmão tostado (10 unidades)"
                desc="Salmão tostado no maçarico, azeite de oliva, pimenta tailandesa, terê e cebolinha."
                price="A partir de R$22,00"
                img="semImagem.jpg"
                path="cardapioGM"           
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="72 – Salmão trufado (22 unidades)"
                desc="Finas fatias de salmão com raspas de limão siciliano, molho especial, azeite trufado e molho ponzu (molho ponzu é uma mistura de suco de laranja, limão e shoyu)."
                price="A partir de R$45,00"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="73 – Salmão passion (10 unidades)"
                desc="Salmão tostado no maçarico, tarê, calda de maracujá e raspa de limão taiti."
                price="A partir de R$34,50"
                img="semImagem.jpg"
                path="cardapioGM"          
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="74 – Salmão crispy (16 unidades)"
                desc="Salmão com crispy de batata doce e molho da casa."
                price="A partir de R$34,50"
                img="semImagem.jpg"
                path="cardapioGM"           
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerante lata (310ml)"
                desc="Coca-cola, Coca-cola zero, Fanta, Kuat ou Sprite."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"           
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerante ks (290ml)"
                desc="Coca-cola ks."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"     
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerante pet (500ml)"
                desc="Coca-cola, Coca-cola Zero, Fanta, Sprite."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"  
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água mineral com gás"
                desc="Água mineral."
                price="A partir de R$4,00"
                img="semImagem.jpg"
                path="cardapioGM"           
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água mineral sem gás"
                desc="Água mineral."
                price="A partir de R$3,50"
                img="semImagem.jpg"
                path="cardapioGM"        
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Schweppes Citrus (310ml)"
                desc="Schweppes CItrus lata."
                price="A partir de R$5,00"
                img="semImagem.jpg"
                path="cardapioGM"          
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Suco Del Valle (200ml)"
                desc="Del Valle Nutri Uva."
                price="A partir de R$5,00"
                img="semImagem.jpg"
                path="cardapioGM"           
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