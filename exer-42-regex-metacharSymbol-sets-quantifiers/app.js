let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i          // ^ means must START with and i case INsensitive
re = /world$/i      // $ means must END with and i case INsensitive
re = /^hello$/i     // ^ must BEGIN with and $ END with
re = /h.llo/i       // . matches any ONE character
re = /h*llo/i       // * matches any ANY character 0 or MORE TIMES
re = /gre?a?y/i     // ? Optional Character (Here can be grey or gray or gry)
re = /gre?a?y\?/i   // \ Escape Character (Gray?) True but (Grar?) False y is no longer optional

//Brackets [ ] - Character Sets
re = /gr[ea]y/i;    // [ ] Must be an e or a (better solution than above)
re = /[^GF]ray/i;   // [^GF] Match anything EXCEPT a G or F (Note: ^INSIDE of the Bracket)
re = /[A-Z]ray/;       // Match any UPPERCASE letter
re = /[a-z]ray/;       // Match any lowercase letter
re = /[A-Za-z]ray/;    // Match any LETTER
re = /[0-9]ray/;       // Match any  DIGIT

//Braces { } - Quantifiers
re = /Hel{2}o/i;       // { } Must occur EXACTLY {m} amount of times example const str = 'Hello'; --More than 2 of l will not be defined/null
re = /Hel{2,4}o/i;     // l Must occur BETWEEN 2 and 4 times
re = /Hel{2,}o/i;     // l Must occur ATLEAST 2 times

//Parenthesis ( ) - Grouping
re = /^([0-9]x){3}$/    // Exclusive from ^ and end $ BUT {3} means 3 time of x. EXAMPLE - 3x3x3x in excess will not be defined

//Shorthand Character Classes
re = /\w/;        // Word Character - alphanumeric or underscore _
re = /\w+/;       // one or more word character or underscore
re = /\W/;        // Non-Word Character or underscore
re = /\d/;        // Any digit in particular only ex. 3 only
re = /\d+/;       // Any digit 0 or more times (combination of numbers)
re = /\D/;        // Non-Digit
re = /\s/;        // White Space Character (  or TAB)
re = /\S/;        // Non-White Space Character
re = /Hell\b/i;   // Word Boundary

//Assertions (Conditionals)
re = /x(?=y)/;    // Match x ONLY if followed by y
re = /x(?!y)/;    // Match x ONLY if NOT followed by y

//====================================================================
//String to Match
// const str = 'Hello World?';
const str = '35554315';

//Log Results
const result = re.exec(str); // returns into an ARRAY or NULL
console.log(result);

function reTest(re, str){
    if(re.test(str)){ // returns TRUE or FALSE
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);