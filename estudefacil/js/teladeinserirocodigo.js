// Obtém referências ao campo de entrada e ao botão de confirmação
const codigoTurmaInput = document.getElementById('codigo_turma');
const confirmarButton = document.querySelector('.confirmar');

//Adiciona ouvinte de evento ao botão de confirmação
confirmarButton.addEventListener('click', handleConfirmationClick);

function handleConfirmationClick(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio de formulário

    // Obtém o código inserido no campo de entrada
    const codigoTurma = codigoTurmaInput.value.trim();

    // Validação básica (verifica se o código está vazio)
    if (codigoTurma === '') {
        alert('Por favor, insira o código da sala!');
        return; //Sai da função se o código estiver vazio
    }

    // Você pode adicionar mais validação ou lógica de processamento aqui

    // Exemplo: Envie o código ao servidor para verificação (substitua pela sua lógica real)
    console.log('Código da sala:', codigoTurma);
    // Substitua pela sua chamada de função real para enviar o código ao servidor
    // sendCodeToServer(codigoTurma);
}