// Get the buttons
const studentButton = document.querySelector('.botao1');
const teacherButton = document.querySelector('.botao2');

//Função para lidar com cliques e redirecionamentos de botões
function handleButtonClick(button, target) {
 // Impede o comportamento padrão de envio de formulário (se aplicável)
  button.addEventListener('click', (event) => {
    event.preventDefault();
   // Redireciona para a página de destino com base no botão clicado
    window.location.href = target;
  });
}

// Processa o clique do botão do aluno
handleButtonClick(studentButton, ""); 

// Lida com clique no botão do professor
handleButtonClick(teacherButton, ""); 


