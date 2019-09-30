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
import LeBrutoicon from './../../assets/lebruto.png'

import Grid from '@material-ui/core/Grid';

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
      <div className="header">
      <Paper className={classes.root}>
        <div className="font-lista cabecalho">
          <img src={LeBrutoicon}  className="img-header" alt=" The Dog Father icon"/>
          Le Bruto
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
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Hambúrgueres Artesanais</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Paper className={classes.root}>            
            <Modal 
              title="9 Horas"
              desc="O básico delicioso, versão kids!/Hambúrguer de blend especial de carne bovina, preparado na brasa, como churrasco, pão branco da casa, molho clássico Le Bruto, molho de tomate estilo ketchup e queijo mozarela. Acompanha batata frita."
              price="A partir de R$20,00"
              img="semImagem.jpg"
              path="cardapioLeBruto"         
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Herbívoro "
              desc="Nada de carnes por aqui/ Pão branco crocante, creme lemon Le Bruto, rúcula, tomate cereja e um apetitoso queijo coalho na brasa. Obs: estamos temporariamente sem o pão branco crocante, será com o pão da casa."
              price="A partir de R$22,00"
              img="semImagem.jpg"
              path="cardapioLeBruto"            
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Chancho "
              desc="Saboroso hambúrguer de carne suína/ Hambúrguer de suíno especial Le Bruto (preparado na brasa, como churrasco), pão branco rústico da casa, molho especial LB, cebola caramelizada, tomate e queijo mozarela. Acompanha Geléia de abacaxi com pimenta."
              price="A partir de R$24,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Gringo"
              desc="Ingredientes de excelente qualidade, em generosas medidas, por um ótimo preço/ Hambúrguer com 200g de um delicioso blend de carne bovina (preparado na brasa, como churrasco), pão branco da casa (maior tamanho), bacon, alface, tomate, queijo cheddar e um creme lemon da Le Bruto."
              price="A partir de R$24,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Salada Hamburguesa"
              desc="Salada + hambúrguer/Hambúrguer clássico (preparado na brasa, como churrasco) + queijo mussarela, mescla de alfaces, rúcula, palmito, tomate cereja e um delicioso queijo emental. Acompanha molho barbecue."
              price="A partir de R$24,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Le Brutinho"
              desc="Mini Burger + Fritas + Brinquedo Colecionável + Mini Refri (Coca-cola/Fanta) "
              price="A partir de R$25,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>     
            <Paper className={classes.root}>            
            <Modal 
              title="Le Bruto"
              desc="O bruto sofisticado!/ Hambúrguer de blend especial de carne bovina, preparado na brasa, como churrasco, pão branco da casa, molho Le Bruto, bacon, presunto, mescla de alfaces, tomate cereja, picles, molho de tomate estilo ketchup e o delicioso queijo emental."
              price="A partir de R$26,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Sofisticado"
              desc="Nem salgado, nem doce: agridoce/ Hambúrguer de blend especial de carne bovina (preparado na brasa, como churrasco), pão rústico rosado Le Bruto, cebola caramelizada, molho barbecue LB, presunto especial espanhol e um apetitoso queijo emental."
              price="A partir de R$26,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Brutamontes"
              desc="Tudo de bom, em generosas medidas/ Hambúrguer com 200g de um delicioso blend especial de carne bovina (preparado na brasa, como churrasco), recheado com queijo cheddar, pão branco da casa, molho lemon LB, bacon, mescla de alfaces, tomate cereja, cebola roxa, molho de tomate estilo ketchup e queijo mozarela."
              price="A partir de R$28,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Churrascada"
              desc="Hambúrguer 180g de Costela, mozzarella de búfala, cebola tostada, maionese Le Bruto, alface e pão australiano."
              price="A partir de R$28,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Churrascada - Pão Tradicional da Casa"
              desc="Hambúrguer 180g de Costela, mozzarella de búfala, cebola tostada, maionese Le Bruto, alface e pão australiano."
              price="A partir de R$28,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Picanha"
              desc="Aquela loucura de moer uma picanha para fazer hambúrguer/ Hambúrguer com 150g de pura picanha, preparado na brasa, como churrasco, pão branco crocante, creme lemon Le Bruto, bacon, tomate, mescla de alfaces e um ótimo queijo gouda."
              price="A partir de R$32,00"
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Adicionais</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Batata Frita"
                desc=""
                price="R$5,00"
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Batata Rústica"
                desc="Assada no forno e finalizada na churrasqueira."
                price="R$5,00"
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Batata Canoa"
                desc=""
                price="R$7,00"
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Panquecas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Panqueca"
                desc="Deliciosa massa de panqueca da casa, recheada com frango (ou blend de carne bovina assada na brasa), molho LB, cream cheese, queijo mozarela, tomate milho e ervilha."
                price="R$23,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
        <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Água com gás"
                desc="Garrafa de 350 ml"
                price="R$4,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água sem gás"
                desc="Garrafa de 350 ml"
                price="R$3,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Aquarius Fresh Limão"
                desc="Garrafa de 510 ml"
                price="R$6,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerantes "
                desc="Coca-cola, Coca-cola Sem Açucar, Fanta Uva, Schweppes Citrus, Guaraná Antarctica."
                price="R$4,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Brahma 0,0 Long Neck"
                desc="355 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$7,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Eisenbahn Long Neck"
                desc="355 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$7,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Skol Long Neck"
                desc="355 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$6,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada American Pale Ale-APA"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$22,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada Hop Lager"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$20,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada India Pale Ale - IPA"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$23,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada Pilsen"
                desc="600 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$20,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada Vienna"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$20,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Louvada Weiss"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$20,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Patricia (Uruguaia)"
                desc="960 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$30,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Petra Aurum"
                desc="500 ml (Venda apenas para maiores de idade) (Beba com moderação)"
                price="R$22,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Sobremesa</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <Paper className={classes.root}>            
            <Modal 
              title="Brownie"
              desc="Bolo de chocolate com cobertura + sorvete de creme e chantily/ Delicioso bolinho de chocolate, com crocante cobertura de chocolate acompanhado de sorvete de creme e chantilly."
              price="R$17,00" 
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
          </Paper>
          <Paper className={classes.root}>            
            <Modal 
              title="Petit Gateau"
              desc="Bolo de chocolate recheado + sorvete de creme/ Delicioso bolinho de chocolate, com casca crocante e recheio cremoso de chocolate, servido acompanhado de sorvete de creme."
              price="R$13,90" 
              img="semImagem.jpg"
              path="cardapioLeBruto" 
              /> 
          </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
          <div className="font-topic">Combos!</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Brutamontes+Fritas+Coca-Lata 310ml"
                desc="Combo Coca-Cola - Brutamontes+Fritas+Coca-Lata 310ml por apenas R$ 35,00. Aproveite! Tudo de bom, em generosas medidas/ Hambúrguer com 200g de um delicioso blend especial de carne bovina (preparado na brasa, como churrasco), recheado com queijo cheddar, pão branco da casa, molho lemon LB, bacon, mescla de alfaces, tomate cereja, cebola roxa, molho de tomate estilo ketchup e queijo mozarela."
                price="A partir de R$35,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Gringo+Fritas+Coca-Cola Lata 310ml"
                desc="Combo Coca-Cola - Gringo+Fritas+Coca-Cola Lata 310ml por apenas R$ 32,00! Aproveite! Ingredientes de excelente qualidade, em generosas medidas, por um ótimo preço/ Hambúrguer com 200g de um delicioso blend de carne bovina (preparado na brasa, como churrasco), pão branco da casa (maior tamanho), bacon, alface, tomate, queijo cheddar e um creme lemon da Le Bruto."
                price="A partir de R$32,00" 
                img="semImagem.jpg"
                path="cardapioLeBruto" 
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