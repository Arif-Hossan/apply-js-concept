
function factorial(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;

}
let result = factorial(6);
console.log(result);