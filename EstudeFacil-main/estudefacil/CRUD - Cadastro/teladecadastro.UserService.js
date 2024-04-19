class UserService {
    createUser(userData) {
      // Validate user data (similar to previous example)
      if (!userData.nome || !userData.senha) {
        throw new Error('Nome e senha são obrigatórios.');
      }
  
      if (userData.senha.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres.');
      }
  
      // Placeholder logic for future database connection
      console.log('User data to be saved:', userData);
      // Replace with actual logic to save user data in your MySQL database
    }
  }
  