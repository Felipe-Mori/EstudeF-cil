const userService = new UserService();

function criarUsuario() {
  try {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    // Validate passwords match (not included in UserService)
    if (senha !== confirmSenha) {
      throw new Error('As senhas não coincidem.');
    }

    const userData = new CreateUserDto(nome, senha);
    userService.createUser(userData);
    clearForm();
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Function to display error messages (unchanged)
function displayErrorMessage(message) {
  // ... (implementation)
}

// Function to clear the form fields (unchanged)
function clearForm() {
  // ... (implementation)
}
