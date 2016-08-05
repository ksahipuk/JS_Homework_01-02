var userNames = [];
var checkLogin = false;

for (var i = 0; i < 5; i++) {
  userNames[i] = prompt('Введите имя пользователя');
}

var currentLogin = prompt('Введите Ваше имя пользователя');

for (var i = 0; i < userNames.length; i++) {
  if (currentLogin == userNames[i]) {
    checkLogin = true;
  }
}

if (checkLogin) {
  alert(currentLogin + ' вы успешно вошли');
} else {
  alert('Такого пользователя не существует');
}