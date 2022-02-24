const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {     /* Each encoded letter's length is 10 */
        let chars = expr.substr(i, 10);  /* string's length is multiple of 10*/
        let charsFromMorse = chars.replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-'); /* Each letter from alphabet encoded with dots(.) and dashes(-). 10 stands for dot(.), 11 stands for dash(-) So we use array.prototype.replace for this numbers. it can be done by making a lot of variables, this is shorter version*/
        result.push(MORSE_TABLE[charsFromMorse]); /* taking info from morse_table*/
    }
    return result.join('');

}

module.exports = {
    decode
}