var letter = "a";
letter = letter.toUpperCase();

switch(letter){
    case "A":
        console.log(letter + " is Vowel");
        break;
    case "E":
        console.log(letter + " is Vowel");
        break;
    case "I":
        console.log(letter + " is Vowel");
        break;
    case "O":
        console.log(letter + " is Vowel");
        break;
    case "U":
        console.log(letter + " is Vowel");
        break;
    default:
        console.log(letter + " is Consonent");

}

//using multiple case
var letter = "k";
letter = letter.toLowerCase();

switch(letter){
    case "a":
    case "e":
    case "i":    
    case "o":
    case "u":
        console.log(letter + " is Vowel");
        break;
    default:
        console.log(letter + " is Consonent");

}