import initScrollSmooth from './scrollSuave.js';
import Accordion from './accordion.js';
import sectionsAnimation from './sectionsAnimation.js';
import initTabNav from './tabNav.js';
import initModal from './modal.js';
import initTollTip from './tooltip.js';
import initDropDownMenu from './dropDown.js';
import initMenuMobile from './menuMobile.js';
import initFuncionamneto from './funcionamento.js';
import initFetchAnimais from './fetchanimais.js';
import initFetchBitcoin from './fetchbitcoin.js';

const accordion = new Accordion('[data-anime="accordion"] dt');

accordion.init();
initScrollSmooth();
sectionsAnimation();
initTabNav();
initModal();
initTollTip();
initDropDownMenu();
initMenuMobile();
initFuncionamneto();
initFetchAnimais();
initFetchBitcoin();
