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
  

const apiKey = 'YOUR_API_KEY_HERE';
const prompt = document.getElementById('prompt').value;;

const gpt3Promise = new Promise((resolve, reject) => {
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'prompt': prompt,
      'max_tokens': 50,
      'n': 1,
      'stop': '\n'
    })
  })
  .then(response => response.json())
  .then(data => {
    const result = data.choices[0].text.trim();
    resolve(result);
  })
  .catch(error => reject(error));
});

gpt3Promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

