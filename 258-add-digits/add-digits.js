/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const add = (n) => {
        const lastDigit = n % 10;
        const rest = Math.floor(n / 10);
        return rest + lastDigit;
    };

    while (num > 9) {
        num = add(num);
    }

    return num;
};