export default function initFuncionamneto() {
  const funcionamneto = document.querySelector('[data-semana]');
  const diasSemana = funcionamneto.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamneto.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (horarioAberto && semanaAberto) {
    funcionamneto.classList.add('aberto');
  }
}
