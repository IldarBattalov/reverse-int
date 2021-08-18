module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let arr = str.split('');
    let newarr = arr.reverse();
    let newstr = newarr.join('');
    let newn = parseInt(newstr);
    return newn;
}