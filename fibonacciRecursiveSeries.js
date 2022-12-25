function fibonacci(length){
    const series=[];
    for(i=0;i<=length;i++){
        if (i==0|| i==1){
            series.push(i);
        }
        else {
            series.push(series[i-1]+series[i-2]);
        }
    }
    return series;
}

// another function for this code
// function fibonacci(length)
// {
//     if (length == 0) {
//         return [0];
//     }
//     else if (length == 1) {
//         return [0, 1];
//     }
//     else {
//         let fibo = fibonacci(length - 1);
//         let nextElement = fibo[length - 1] + fibo[length - 2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }
console.log(fibonacci(10));

