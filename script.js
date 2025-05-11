const allowPublicPassword = true;  // Toggle 'games'
const allowPrivatePassword = true;  // Toggle '2900'

const loginForm = document.querySelector('#login-form');
const usernameInput = loginForm.querySelector('#username');
const passwordInput = loginForm.querySelector('#password');
const content = document.querySelector('#content');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  let isValid = false;

  if (enteredUsername === 'ez') {
    if (enteredPassword === 'games') {
      if (allowPublicPassword) {
        isValid = true;
      } else {
        alert('ezgames is temporarily unavailable please try again later.');
        return;
      }
    } else if (enteredPassword === '2900') {
      if (allowPrivatePassword) {
        isValid = true;
      } else {
        alert('Developer password disabled.');
        return;
      }
    }
  }

  if (isValid) {
    content.style.display = 'block';
    loginForm.style.display = 'none';
    clicksoundeffect.play();
  } else {
    alert('Error: Invalid username or password');
  }
});

const clicksoundeffect = new Audio('clicksoundeffect.mp3');



function cloak(){
  var tab = window.open('about:blank', '_blank');
tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" id="incognito" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
tab.document.close();

window.location.replace("https://classroom.google.com");
}



