let re;
re = /hello/;
re1 = /hello/i; // i is for case insensitive
// console.log(re); returns /hello/
// console.log(re.source); returns hello

/*----- exec()---RETURNS IN AN ARRAY OR NULL---*/
const result = re.exec('brad hello world');
//console.log(result); hello index 5 started coz b is index 0;
//console.log(result.index); 5
//console.log(result.input); brad hello world

/*----- test()---RETURNS TRUE or FALSE---*/
const result1 = re1.test('Hello');
//console.log(result1); false as H is in capslock; with i will be true

/*----- match()---RETURNS IN AN ARRAY OR NULL---*/
const str = 'Hello there';
const str1 = 'Hell there'; // returns NULL
const result2 = str.match(re);
//console.log(result2);  will match str Hello INTO re hello/i which will return to Hello, index: 0, input: "Hello there"

/*----- search()---RETURNS INDEX OF THE 1ST MATCH & IF NOT FOUND RETURNS -1 */
const str2 = 'BradPitt hello there';
const result3 = str2.search(re);
console.log(result3); //9 as h index

/*-----replace()---RETURNS NEW STRING WITH SOME OR ALL MATCHES OR A PATTERN */
const str3 = "Hello there";
const newStr = str3.replace(re, "Hi")
//console.log(newStr);  Hi there - replaces Hello with Hi

