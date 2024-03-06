const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})

// document.getElementById("contato").addEventListener("submit", function (event) {
//     // Impede o envio do formulário para que possamos controlar o redirecionamento manualmente
//     event.preventDefault();

//     // Substitua esta URL pela URL da sua página normal
//     var paginaNormal = "http://127.0.0.1:5500/index.html";

//     // Redireciona para a página normal após 3 segundos (3000 milissegundos)
//     setTimeout(function () {
//         window.location.href = paginaNormal;
//     }, 3000); // Redireciona após 3 segundos
// });
