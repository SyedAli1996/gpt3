function checkCredentials() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = 'https://cookbook.com/server/';
  
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(Error(xhr.statusText));
        }
      };
      xhr.onerror = function() {
        reject(Error('Network Error'));
      };
      xhr.send(JSON.stringify({ email: email, password: password }));
    });
  }


  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    checkCredentials()
      .then(response => {
        
      })
      .catch(error => {
        
      });
  });
  


