/*
Basta copiar esse script e colar no navegador.
OBS: É necessário em alguns casos digitar "allow pasting" 
no console devido a questões de segurança do navegador.
*/
(function preencherFormulario() {
  const totalQuestoes = 51; // Número de questões + 1

  for (let i = 0; i < totalQuestoes; i++) {
    for (let j = 0; j < 10; j++) {
      const name = `aspectos[${j}].perguntaRespostas[${i}].idOpcaoRespostaSelecionada`;
      const opcoes = document.querySelectorAll(`input[name="${name}"]`);

      if (opcoes.length === 0) {
        console.warn(`Questão ${i + 1} não encontrada.`);
        continue;
      }

      const nota = 10; //Caso queria deixar aleatório: Math.floor(Math.random() * 4) + 7

      const opcaoSelecionada = Array.from(opcoes).find(
        (op) => op.parentElement.textContent.trim() == nota.toString()
      );
      if (opcaoSelecionada) {
        opcaoSelecionada.checked = true;
      } else {
        console.warn(`Nota ${nota} não encontrada para a questão ${i + 1}.`);
      }
    }
  }
  console.log("✅ Formulário preenchido!");
})();
