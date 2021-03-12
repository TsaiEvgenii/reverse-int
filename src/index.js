module.exports = function reverse (n) {
    return n.toString().replace(/\D/g, "").tsplit('').reverse().join('');
}
