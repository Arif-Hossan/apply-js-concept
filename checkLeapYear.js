function isLeapYear(year) {
    if (year % 400 == 0 && year % 100 == 0) {
        return result = `${year} is a leap year`;
    }

    else if ( year % 4 == 0 && year % 100 !== 0){
        return result = `${year} is a leap year`;
    }
    else {
        return result = `${year} is not a leap year`;
    }
}

let check1900 = isLeapYear(2000);
console.log(check1900);
let check2012 = isLeapYear(2400);
console.log(check2012);