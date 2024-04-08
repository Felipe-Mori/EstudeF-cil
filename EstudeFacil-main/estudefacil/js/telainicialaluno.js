JavaScript
// Função para abrir a modal de entrar em uma turma
function abrirModalEntrarTurma() {
    // Exibir a modal
    document.getElementById("modalEntrarTurma").style.display = "block";
}

// Função para fechar a modal de entrar em uma turma
function fecharModalEntrarTurma() {
    // Ocultar a modal
    document.getElementById("modalEntrarTurma").style.display = "none";
}

// Adicionar eventos de click aos botões
document.getElementById("entrarEmTurma").addEventListener("click", abrirModalEntrarTurma);
document.getElementById("fecharModalEntrarTurma").addEventListener("click", fecharModalEntrarTurma);

// Exemplo de função para buscar turmas
function buscarTurmas() {
    // Fazer uma requisição AJAX para buscar as turmas do usuário
    // ...

    // Atualizar a lista de turmas na tela
    // ...
}

// Chamar a função para buscar turmas quando a página carregar
window.onload = function() {
    buscarTurmas();
};