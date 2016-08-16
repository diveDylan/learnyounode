var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// заметьте, что вы можете избежать использования .toString(), передав 'utf8'
// в качестве второго аргумента в readFileSync и получив затем строку!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1