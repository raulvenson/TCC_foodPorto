import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';


import { TiArrowBackOutline } from 'react-icons/ti';



import './TheDogFather.css'
import TDFicon from './../../assets/TDFicon.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
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
     <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          <img src={TDFicon}  className="img" alt=" The Dog Father icon"/>
          The DogFather
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </Typography>
      </Paper>
      
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Entradas</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Paper className={classes.root}>
              <Typography variant="h6" component="h6">
                Fritas TDF com Bacon e Cheddar 
              </Typography>
              <Typography>
                Porção de 400g de batatas fritas sequinhas com bacon e muito cheddar.
              </Typography>
              <Typography className="preco">
                A partir de R$18,90
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h6" component="h6">
                Mix TDF 
              </Typography>
              <Typography>
                200g de onion rings, 200g de mussarela sticks e 300g de mini salsichas artesanais berna, acompanhadas de cheddar, barbecue e mostarda amarela.
              </Typography>
              <Typography className="preco">
                A partir de R$38,90
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h6" component="h6">
                Porção de Salsicha Artesanal
              </Typography>
              <Typography>
                Salsicha suína e bovina artesanal berna, acompanhada de pão alemão, barbecue e mostarda amarela.
              </Typography>
              <Typography className="preco">
                A partir de R$19,90
              </Typography>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Hot Dogs Premium</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  Salsicha TDF, milho e ervilha. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado. 
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  02 - Vito
                </Typography>
                <Typography>
                  Salsicha TDF, chilli e Doritos. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado.
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  03 - Connie
                </Typography>
                <Typography>
                  Salsicha de frango, bacon e milho. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado.
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  04 - Tom
                </Typography>
                <Typography>
                  Salsicha TDF, cheddar e cebola caramelizada. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado.
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  05 - Luca 
                </Typography>
                <Typography>
                  Salsicha TDF, pepperoni, sour cream e vinagrete. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado.
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  01 - Fredo
                </Typography>
                <Typography>
                  
                </Typography>
                <Typography className="preco">
                  A partir de R$14,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  06 - Carmella
                </Typography>
                <Typography>
                  Salsicha TDF, tomate, manjericão, azeite e orégano. Acompanha pão, purê de batata, molho especial, batata palha e queijo maçaricado. 
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                  03 - Connie
                </Typography>
                <Typography>
                  Salsicha de frango, bacon e milho. Acompanha pão, purê de batata, molho especial, batata palha e queijo maçaricado. 
                </Typography>
                <Typography className="preco">
                  A partir de R$18,90
                </Typography>
              </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Combos!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
              <li>Hot Dog Simples + Guaraná</li>
              <li>Hot Dog Bacon + Coca-Cola</li>
              <li>Hot Dog Calabresa + Água</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Combos!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
              <li>Hot Dog Simples + Guaraná</li>
              <li>Hot Dog Bacon + Coca-Cola</li>
              <li>Hot Dog Calabresa + Água</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div>
      <a href="https://api.whatsapp.com/send?phone=5565999271048&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" style={{ textDecoration: 'none' }}>
        <Paper className='wpp'>
          <Typography variant="h5" component="h3">
          
            <span className='text'>Faça seu pedido agora!&nbsp;</span> 
            <FaWhatsapp className="icon-whatsapp"/>
          </Typography>
        </Paper>
      </a> 
      </div>
    
    </div>
  );
}