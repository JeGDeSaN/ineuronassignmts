const toLowcase = str => str.charAt(0) === str.charAt(0).toLowerCase();;

let x = ['hello', 'Hello', 'hEllO', 'HELLO WORLD', ' hello', '', '123hello', '@#$hello'];

x.forEach(e => console.log(`${e} => ${toLowcase(e)}`));