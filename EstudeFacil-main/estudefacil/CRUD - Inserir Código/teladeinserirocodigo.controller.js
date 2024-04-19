const userService = new UserService();

async function entrarNaTurma() {
  try {
    const codigoTurma = document.getElementById('codigo_turma').value;

    const enterClassCodeData = new EnterClassCodeDto(codigoTurma);
    const classe = await userService.enterClass(enterClassCodeData);
    // Handle successful class entry (e.g., redirect to the class page)
    console.log('Turma acessada com sucesso:', classe);

  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Function to display error messages (unchanged)
function displayErrorMessage(message) {
  // ... (implementation)
}
