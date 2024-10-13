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
};

function decode(expr) {
    // write your solution here
    function splitIntoBlocks(encodedString) {
        let blocks = [] // массив где будут все кусочки по 10
        for (let i = 0; i < encodedString.length; i += 10) { //создаем переменную i, которая нач с 0
            blocks.push(encodedString.slice(i, i + 10)) // push кладет элемент в конец, slice берет именно 10 символов 
        }
        return blocks
    }
    // функция преобазования блока в точки и тире
    function decodeBlock(block) { //преобразуем пробелы 
        if (block === '**********') {
            return ' '
        }
        let morseChar = ''
        for (let i = 0; i < 10; i += 2) { // цикл, что бы брать по два элемента
            let pair = block.slice(i, i + 2); // переменная pair будет хранить пару символов, slice берет часть строки
            if (pair === '10') {
                morseChar += '.'; // '10' становится '.'
            } else if (pair === '11') {
                morseChar += '-'; // '11' становится '-'
            }
        }
        return morseChar;
    }
    // преобразование точек и тире в буквы
    let blocks = splitIntoBlocks(expr)
    let decodedMessage = '';
    for (let block of blocks) {
        let morseCode = decodeBlock(block); // Декодируем блок
        
        if (morseCode === ' ') {
            decodedMessage += ' '; // Если пробел, добавляем пробел
        } else {
            // Если это буква, ищем её в словаре и добавляем к результату
            decodedMessage += MORSE_TABLE[morseCode] || '';
        }
    }
    return decodedMessage
}

module.exports = {
    decode
}