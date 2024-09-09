// exemplo 1

var num = 1;
if (num === 1) {
    console.log("num é igual 1");
}

// exemplo 2

var num = 1;
if (num === 1) {
     console.log("num é igual 1");
} else {
    console.log('num não é igual a 1, num vale: ' + num);
}

// exemplo 3

if (num === 1) {
    num--;
} else {
    num++;
}

// exemplo 3 tambem pode ser feito assim:

(num === 1) ? num-- : num++;

// exemplo 4

var month = 5;
if (month === 1) {
    console.log("Janeiro");
} else if (month === 2) {
    console.log("Fevereiro");
} else if (month === 3) {
    console.log("Março");
} else {
    console.log("Mês não é Janeiro, Fevereiro ou Março");
}

// exemplo 5

var month = 5;
switch (month) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Mês não é Janeiro, Fevereiro ou Março");
}

// exemplo 6

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// exemplo 7
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// exemplo 8

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

    

