const userService = new UserService();

async function entrar() {
  try {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const loginData = new LoginUserDto(usuario, senha);
    const user = await userService.login(loginData);
    // Handle successful login (e.g., redirect to another page)
    console.log('Login successful:', user);

  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Function to display error messages (unchanged)
function displayErrorMessage(message) {
  // ... (implementation)
}
