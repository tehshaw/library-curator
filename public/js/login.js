const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const libraryCard = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (libraryCard && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ libraryCard, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);