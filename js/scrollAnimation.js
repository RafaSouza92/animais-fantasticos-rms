import initDropDownMenu from './dropDown';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - this.halfWindow < 0;
      if (sectionVisible) {
        section.classList.add('ativo');
      }
    });
  }
  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
