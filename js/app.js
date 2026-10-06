// 1. Lógica para fazer o botão funcionar
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
    // Alterna a visibilidade da mensagem de sucesso
    mensagem.classList.toggle('oculto');
});

// 2. Registro do Service Worker (Essencial para instalação)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado em: ', reg.scope))
            .catch(err => console.log('Erro ao registrar Service Worker: ', err));
    });
}
