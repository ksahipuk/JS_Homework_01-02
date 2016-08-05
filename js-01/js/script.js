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
    } else {
        alert( 'Дробные степени не поддерживаются' )
    }
}

var y;
var n;

y = prompt( 'Введите число' );
n = prompt( 'Введите степень' );

console.log(y + ' в степени ' + n + ' = ' + pow(y, n));
