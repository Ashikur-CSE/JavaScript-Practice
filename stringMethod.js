var name = "Bangladesh";
var length = name.length;
console.log("Total charecter in this string is: " + length);

// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)
var slice = name.slice(0,5);
var slice2 = name.slice(5);
//If a parameter is negative, the position is counted from the end of the string:
var slice3 = name.slice(-12, -6);

console.log("slice: "+slice);
console.log("slice2: "+slice2);
console.log("slice3: "+slice3);

//The difference is that the second parameter specifies the length of the extracted part.
var subOfString = name.substr(3,4);
console.log(subOfString);

// Replacing String Content
var text = "Please visit Microsoft!";
var replace = text.replace("visit", "destroy");
console.log("After replacing: " +replace);
//The replace() method replaces only the first match
//If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
var text2 = "Please visit Microsoft. Microsoft is very popular.";
var allReplace = text2.replace(/Microsoft/g , "Google");
var replaceAll = text2.replaceAll( "Microsoft", "Amazon");

console.log("After replacing: " +allReplace);
console.log("After replacing: " +replaceAll);
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
var caseReplace = text.replace(/Microsoft/i , "Google");
console.log("After replacing: " +caseReplace);

// Converting to Upper and Lower Case
var address = "Ashulia, Dhaka";
var upper = address.toUpperCase();
var lower = address.toLowerCase();

console.log("After Uppercase: " + upper);
console.log("After Lowercase: " + lower);

// JavaScript String concat()
var first = "Ashikur";
var second = "Rahman";
var fullname1 = first + " " + second + "m " + "Ashik";
console.log("My Full Name is:" +fullname1);
var fullname = first.concat(" ", second, " ", 'Shishir');
console.log("My Full Name is:" +fullname);

// The trim() method removes whitespace from both sides of a string:
var first = "        Ashikur       ";
var trimmed = first.trim();
console.log(first.length);
console.log(trimmed.length);
console.log(first.trimStart().length);
console.log(first.trimEnd().length);

// The padStart() method pads a string from the start.
var num = "9";
var paddedStart = num.padStart(5, "A");
var paddedEnd = num.padEnd(5, "Z");
console.log(paddedStart);
console.log(paddedEnd);

// Extracting String Characters
name = "Bangladesh";
var find = name.charAt(4);
var find2 = name.charCodeAt(4);
var find3 = name[3]

console.log(find); 
console.log(find2); 
console.log(find3); 


// Converting a String to an Array
var str = "A,S,h,i,k,u,r";
var str2 = str.split(",");
console.log(str2[2]);



