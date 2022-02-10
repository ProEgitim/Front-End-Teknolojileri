// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// console.log('three');

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);