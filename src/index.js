module.exports = function reverse (n) {
    
    n = n + ''
    n = n.split('')
    n = n.reverse()
    return parseInt(n.join(''))
    console.log(n)
}
