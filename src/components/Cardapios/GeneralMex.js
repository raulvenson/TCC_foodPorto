import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Whats_qld from '../../assets/whats_qld.png';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'
import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'

import GeneralMexLogo from './../../assets/cardapioGM/GeneralMexLogo.png'

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
          <img src={GeneralMexLogo}  className="img-header" alt="General Mex logo"/>
          General Mex
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
          <div className="font-topic">Burritos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Carne de Panela"
                desc="Carne de Panela Desfiada, Fina Massa Mexicana de Trigo, Tomate Seco e Rúcula, Frijoles, Queijo mozzarella e Molho Guadalajara. (SEM PICÂNCIA)/ 400g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$26,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Frango"
                desc="Frango Mex, Fina Massa Mexicana de Trigo, Tomate, Queijo mozzarella, Frijoles, Cheddar e Azeitonas. (SEM PICÂNCIA)/ 400g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$23,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Pernil Suíno"
                desc="Pernil suíno desfiado, Fina Massa Mexicana de Trigo, Tomate, Frijoles, Queijo mozzarella e Barbecue Artesanal. (SEM PICÂNCIA)/ 400g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Alcatra"
                desc="Alcatra em Cubos, Fina Massa Mexicana de Trigo, Tomate, Frijoles, Molho Texano e Queijo Mozzarella. (SEM PICÂNCIA)/ 400g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$28,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Surf and Turf"
                desc="Deliciosa Combinação de Pernil Suíno e Camarão, Fina Massa Mexicana de Trigo, Molho Teriyaki de Laranja, Frijoles, Tomate e Queijo Mozzarella. (SEM PICÂNCIA)/ 400g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$28,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Quesadilla</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Filé Mignon"
                desc="Filé Mignon em Cubos ao Barbecue Artesanal, Fina Massa Mexicana de Trigo, Queijo Mozzarella e Frijoles. (SEM PICÂNCIA)/ 360g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$26,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Frango"
                desc="Frango Mex, Fina Massa Mexicana de Trigo, Frijoles, Cebola Roxa, Cheddar e Queijo Mozzarela.(SEM PICÂNCIA)/ 360g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$22,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Pernil Suíno"
                desc="Pernil Suíno Desfiado, Fina Massa Mexicana de Trigo, Frijoles, Molho Agridoce de Abacaxi com Gengibre e Queijo Mozzarela. (SEM PICÂNCIA)/ 360g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$22,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Mix de Queijos"
                desc="Mozzarela, Prato, Cream Cheese e Fina Massa Mexicana de Trigo. (SEM PICÂNCIA)/ 360g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$24,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Tomate Seco e Rúcula (Vegetariana)"
                desc="Tomate Seco e Rúcula, Frijoles, Queijo Mozzarela e Fina Massa Mexicana de Trigo. (SEM PICÂNCIA)/ 340g/ Acompanha Guacamole e Barbecue Artesanal."
                price="R$20,00"
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Nachos</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Bacon BBQ"
                desc="Chips de Milho Crocante (Original-Importado do México), Chilli com Carne, Barbecue Artesanal, Bacon, Queijo Mozzarela e Prato, Azeitonas e Cebolinha. (LEVE PICÂNCIA)/ Acompanha Guacamole e Sour Cream."
                price="R$28,00" 
                img="semImagem.jpg"
                path="cardapioGM" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Super Nachos"
                desc="Queridinho em Todos os Restaurantes e Bares de Temática Mexicana, Esse Clássico Leva em Sua Composição, Chips de Milho Crocante (Original-Importado do México), Chilli com Carne,Queijo Mozzarela e Prato, Cheddar, Azeitonas, Pimentão Amarelo e Vermelho em Cubos, Rodelas de Pimenta Jalapeño em Conserva e Cebolinha. (LEVE PICÂNCIA)"
                price="R$42,00" 
                img="semImagem.jpg"
                path="cardapioGM" 
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
        <div className="font-topic">Pork Ribs</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Pork Ribs & Batata Rústica (Uma Pessoa)"
                desc="Costela Suína com Barbecue Artesanal (400g). Acompanha Batata Rústica (250g) e Cinnamon Apple (80g)."
                price="R$32,00" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Pork Ribs & Batata Rústica (Duas Pessoa)"
                desc="Costela Suína com Barbecue Artesanal (400g). Acompanha Batata Rústica (250g) e Cinnamon Apple (80g)."
                price="R$58,00" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Sandwich</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Torta (Sandwich)"
                desc="Tradicional Sanduíche de Pernil Suíno Desfiado no Pão Baguette, Grelhado com Barbecue Artesanal, Cebola Roxa e Queijo Mozzarela. (SEM PICÂNCIA) 500g. Acompanha Batata Rústica e Creme Aioli."
                price="R$25,00" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
        <div className="font-topic">Chips & Salsa</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Chips & Salsa"
                desc="Cesto com Tortillas (Chips) de Milho Crocante (Original-Importado do México) 140g. Ideal para servir como entrada ou para acompanhar cerveja/chopp. Acompanha os molhos, Guacamole, Sour Cream, Barbecue e Salsa Roja. (Todos os Molhos Artesanais)"
                price="R$24,00" 
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