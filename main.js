console.log('------------- # 4')

let btn = document.getElementById('btn');
let nameInput = document.getElementById('name');
let passwordInput = document.getElementById('password');
let insertData = document.getElementById('insertData');

btn.addEventListener('click', data);

function data() {        
  let dataName = nameInput.value;      
  let dataPass = passwordInput.value;    
    if (dataPass.length > 0 && dataName.length > 0) {
        insertData.innerHTML = 'User name: ' + dataName + '</br>' + 'Password: ' + dataPass;
        localStorage.setItem("User Name ", dataName);
        localStorage.setItem("Password:", dataPass);
        return insertData.innerHTML;
    } alert ('Введите имя и пароль');     
};