const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    const spanTexto = botao.querySelector("span");
    let total = parseInt(spanTexto.textContent) || 0;

    if (!curtiu) {
      spanTexto.textContent = total + 1;
      curtiu = true;
    } else {
      spanTexto.textContent = total - 1;
      curtiu = false;
    }

    botao.classList.toggle("curtido");
  });
});