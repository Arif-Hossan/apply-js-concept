function factorial(n) {
    if (n == 0) {
        return 1; // Stoping Condition
    }
    else {
        return n * factorial(n - 1);
    }
}
let result = factorial(5);
console.log(result);