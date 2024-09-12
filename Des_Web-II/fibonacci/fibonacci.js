function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // o temp é uma váriavel que armazena um valor temporariamente  
  let a = 0, b = 1, temp;
  
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

console.log(fibonacci(3)); // Saída: 2
console.log(fibonacci(7)); // Saída: 13
console.log(fibonacci(9)); // Saída: 34
console.log(fibonacci(16)); // Saída: 987