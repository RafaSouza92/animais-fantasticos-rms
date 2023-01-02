import initScrollSmooth from './scrollSuave.js';
import Accordion from './accordion.js';
import ScrollAnima from './scrollAnimation.js';
import TabNav from './tabNav.js';
import Modal from './modal.js';
import ToolTip from './tooltip.js';
import DropDownMenu from './dropDown.js';
import MenuMobile from './menuMobile.js';
import Funcionamneto from './funcionamento.js';
import fetchAnimais from './fetchanimais.js';
import fetchBitcoin from './fetchbitcoin.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initScrollSmooth();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamneto('[data-semana]', 'aberto');
funcionamento.init();
fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
