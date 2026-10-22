/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let n = num;
    let str = "";

    if (Math.floor(n / 1000)) {
        str += "M".repeat(Math.floor(n / 1000));
        n = n % 1000;
    }
    if (Math.floor(n / 900)) {
        str += "CM".repeat(Math.floor(n / 900));
        n = n % 900;
    }
    if (Math.floor(n / 500)) {
        str += "D".repeat(Math.floor(n / 500));
        n = n % 500;
    }
    if (Math.floor(n / 400)) {
        str += "CD".repeat(Math.floor(n / 400));
        n = n % 400;
    }
    if (Math.floor(n / 100)) {
        str += "C".repeat(Math.floor(n / 100));
        n = n % 100;
    }
    if (Math.floor(n / 90)) {
        str += "XC".repeat(Math.floor(n / 90));
        n = n % 90;
    }
    if (Math.floor(n / 50)) {
        str += "L".repeat(Math.floor(n / 50));
        n = n % 50;
    }
    if (Math.floor(n / 40)) {
        str += "XL".repeat(Math.floor(n / 40));
        n = n % 40;
    }
    if (Math.floor(n / 10)) {
        str += "X".repeat(Math.floor(n / 10));
        n = n % 10;
    }
    if (Math.floor(n / 9)) {
        str += "IX".repeat(Math.floor(n / 9));
        n = n % 9;
    }
    if (Math.floor(n / 5)) {
        str += "V".repeat(Math.floor(n / 5));
        n = n % 5;
    }
    if (Math.floor(n / 4)) {
        str += "IV".repeat(Math.floor(n / 4));
        n = n % 4;
    }
    if (Math.floor(n / 1)) {
        str += "I".repeat(Math.floor(n / 1));
        n = n % 1;
    }
    
    return str;
    
};