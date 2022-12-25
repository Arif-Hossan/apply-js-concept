function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n == 0 || n== 1) {
            return `${n} is not prime number`;
        }
        else if (n % i == 0) {
            return `${n} is not prime number`;
        }
    }
    return `${n} is prime number`;
}
console.log(isPrime(2));
console.log(isPrime(4));





/*
function isPrimeRecursive(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    return isPrimeRecursiveHelper(num, 3);
  }

  function isPrimeRecursiveHelper(num, divisor) {
    if (divisor > Math.sqrt(num)) return true;
    if (num % divisor === 0) return false;
    return isPrimeRecursiveHelper(num, divisor + 2);
  }

  console.log(isPrimeRecursive(3));  // true
  console.log(isPrimeRecursive(4));  // false
*/