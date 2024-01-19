const s="jegadeesan";

console.log(s.toUpperCase())

s1 = s.charAt(0).toUpperCase() + s.slice(1);

console.log(s1);

const s2="JEGADEESAN"

console.log(s2.toLowerCase())

const s3 = s2.split("").reduce((acc, char) => char + acc, "");

console.log(s3);


function ReverseString(str) {
	return str.split('').reverse().join('')
}

console.log(ReverseString("Example of reversing a string"))



function CharOccur(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

const letterToCheck = "e";
const result = CharOccur(s, letterToCheck);
console.log(result);
