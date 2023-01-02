import initScrollSmooth from './scrollSuave.js';
import Accordion from './accordion.js';
import sectionsAnimation from './sectionsAnimation.js';
import TabNav from './tabNav.js';
import Modal from './modal.js';
import ToolTip from './tooltip.js';
import initDropDownMenu from './dropDown.js';
import initMenuMobile from './menuMobile.js';
import initFuncionamneto from './funcionamento.js';
import initFetchAnimais from './fetchanimais.js';
import initFetchBitcoin from './fetchbitcoin.js';

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

initScrollSmooth();
sectionsAnimation();
initDropDownMenu();
initMenuMobile();
initFuncionamneto();
initFetchAnimais();
initFetchBitcoin();
