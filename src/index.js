module.exports = function reverse (n) {
    let num_str = '';
    let number = n;
    if (number < 0) {
        number *= -1;
    }
    while (number !== 0) {
        num_str += number % 10;
        number = Math.floor(number / 10);
    }
    return parseInt(num_str);
}
