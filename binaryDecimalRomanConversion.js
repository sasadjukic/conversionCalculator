

const HEXES = {0 : "0", 1 : "1", 2 : "2", 3 : "3", 4 : "4", 5 : "5", 6 : "6",
               7 : "7", 8 : "8", 9 : "9", 10 : "A", 11 : "B", 12 : "C", 13 : "D",
               14 : "E", 15 : "F"
};

const ROMANS = {"M" : ["", "M", "MM", "MMM", "MMMM", "MMMM"], 
                "C" : ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                "X" : ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                "I" : ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
};

const message = alert("You can choose to convert decimal to binary, hexadecimal or roman numbers");
const messageTwo = alert("Roman numbers are capped up to and not including 5000");

let binary = number => {

    let binaryNumber = '';

    while (number >=1) {

        if(number % 2 == 0) {
            binaryNumber = '0' + binaryNumber;
        } else {
            binaryNumber = '1' + binaryNumber;
        }
        number = Math.floor(number / 2);
    }

    return binary;

};

let hex = number => {

    let hexadecimal = '';

    while (number != 0) {
        let digit = number % 16;
        hexadecimal = HEXES[digit] + hexadecimal
        number = Math.floor(number / 16);
    }

    return hexadecimal;

};

let romans = number => {

    let thousands = ROMANS["M"][Math.floor(number / 1000)];
    let hundreds = ROMANS["C"][Math.floor((number % 1000) / 100)];
    let tens = ROMANS["X"][Math.floor((number % 100) /10)];
    let ones = ROMANS["I"][number % 10];

    let roman = thousands + hundreds + tens + ones;

    return roman;

};


while (true) {

    let conversionType = prompt("Convert decimal to Binary[B], Hexadecimal[H] or Roman[R]?: ");
    let userNumber = +prompt("Enter number: ", 0);

    let conversion = (choice, number) => {

        if (choice.toUpperCase() == "B") {
            return alert(binary(number));
        } else if (choice.toUpperCase() == "H") {
            return alert(hex(number));
        } else if (choice.toUpperCase() == "R") {
            return alert(romans(number));
        } else {
            return alert('This choice of conversion is not supported. Try again');
        }

    }

    let continueConversion = () => {

        let keepConverting = prompt("Do you want to convert another number[Y/N]?: ");
        
        if (keepConverting.toUpperCase() == 'Y') {
            return (true);
        }
        
        return (false);

    }

    conversion(conversionType, userNumber);

    if (!continueConversion()) {
        break;
    }

};

