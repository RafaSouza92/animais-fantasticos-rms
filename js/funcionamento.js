export default class Funcionamneto {
  constructor(funcionamneto, activeClass) {
    this.funcionamneto = document.querySelector(funcionamneto);
    this.activeClass = activeClass;
  }
  dadosFuncionamento() {
    this.diasSemana = this.funcionamneto.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamneto.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  ativoAberto() {
    if (this.estaAberto()) {
      this.funcionamneto.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamneto) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativoAberto();
    }
    return this;
  }
}
