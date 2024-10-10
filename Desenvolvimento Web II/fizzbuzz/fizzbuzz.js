function fizzbuzz(n){
    for (let i = 1; i <= n; i++)
        if ((i % 3 === 0) && (i % 5 === 0))
            console.log("FizzBuzz");

        else if (i % 5 === 0)
            console.log("Buzz");

        else if (i % 3 === 0)
            console.log("Fizz");
        
        else (console.log(i));
}

fizzbuzz(5)
console.log("----------------") // Linha para separar resultados
fizzbuzz(15)
console.log("----------------") // Linha para separar resultados
fizzbuzz(22)