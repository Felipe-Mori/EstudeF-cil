// Animação de boas-vindas
const welcomeText = document.querySelector('#princ h1');
let i = 0;
const welcomeTextLength = welcomeText.textContent.length;
const interval = setInterval(() => {
  if (i < welcomeTextLength) {
    welcomeText.textContent += welcomeText.textContent[i];
    i++;
  } else {
    clearInterval(interval);
  }
}, 100);

// Exibição de detalhes dos benefícios
const benefits = document.querySelectorAll('.absolute ul li');
benefits.forEach(benefit => {
  benefit.addEventListener('click', () => {
    const details = benefit.querySelector('.details');
    details.classList.toggle('hidden');
  });
});

// Validação do formulário de inscrição
const form = document.querySelector('#signup-form');
form.addEventListener('submit', (event) => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (!name || !email || !password) {
    event.preventDefault();
    alert('Preencha todos os campos obrigatórios!');
  }
});