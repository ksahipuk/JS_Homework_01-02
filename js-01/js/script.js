function pow(y, n) {
    var powResult = 1;
    if (n % 1 == 0) {
            if (n < 0) {
                for (var i = n; i < 0; i++) {
                    powResult = powResult * y;
                }
                return (1 / powResult);
            } else if (n == 0) {
                return (1);
            } else {
                for (var i = 0; i < n; i++) {
                    powResult = powResult * y;
                }
                return (powResult);
            }
        }  else {
    alert( 'Ошибка! Введите целое число' )
    }
}

var y = +prompt('Введите число');
    n = +prompt('Введите степень');

if (isNaN(n)) {
    alert('Ошибка! Введено не число');
} else if (isNaN(y)) {
    alert('Ошибка! Введено не число')
} else {
    console.log(y + ' в степени ' + n + ' = ' + pow(y, n));
}
