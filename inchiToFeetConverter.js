function inchToFeet(inch) {
    let foot = inch / 12;
    let result = Math.floor(foot) + " foot " + Math.round((foot % (Math.floor(foot))) * 12) + " inch";
    return result;
}

let a = inchToFeet(134);
console.log(a);

let b = inchToFeet(64);
console.log(b);