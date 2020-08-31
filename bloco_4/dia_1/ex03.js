let a = 3;
let b = 7;
let c = 1;

if ( a > b && a > c) {
    return a;
}
else if ( b > c && b > a) {
    return b;
}
else {
    return c;
}