// largura da janela do navegador
var larguraJanela = window.innerWidth;

// Verifique a largura da janela e ajuste o estilo no tamanho base 
if (larguraJanela < 768) {
  // Para telas menores que 768 pixels
  document.getElementById("elemento").style.fontSize = "16px";
} else {
  // Para telas maiores que 768 pixels
  document.getElementById("elemento").style.fontSize = "24px";
}
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Evita que a página seja recarregada após o envio do formulário
  event.preventDefault();

  // Realize aqui o envio do formulário para o servidor

  // Exibe uma notificação quando o formulário for enviado com sucesso
  if ("Notification" in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        const notification = new Notification("Mensagem enviada com sucesso!", {
          body: "Obrigado por entrar em contato!",
          icon: "caminho/para/icone.png"
        });
      }
    });
  }

  // Limpa os campos do formulário após o envio
  form.reset();
});
