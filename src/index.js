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
    '*': ' ',
};

function decode(expr) {
    let result = [];
    let str = '';
    let litavar = 0

    for (i = 0; i < expr.length; i+=10) {
        
        if (expr[i] == '*') {
            str += '*';
        }
        
        else {
            for (k = 0; k < 10; k+=2) {
                if (expr[i+k] == '1' && expr[i+k+1] == '1') {
                    str += '-';
                }
                else if (expr[i+k] == '1' && expr[i+k+1] == '0') {
                    str += '.';
                }
                else { litavar += 1}               
            }
        }

        str += ' '
    }
     result = str.split(' ');

    let answer ='';

    for (m = 0; m < result.length - 1; m++) {
        answer += MORSE_TABLE[result[m]];
    }

    return answer
}

module.exports = {
    decode
}