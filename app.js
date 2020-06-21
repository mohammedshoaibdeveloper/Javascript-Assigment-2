// ch 21-25
// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstname = prompt("Enter First Name:")
// var Lastname = prompt("Enter Last Name:")
// var fullname = firstname + Lastname
// alert(fullname)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobile = prompt("Enter favorite mobile phone model")
// var l = mobile.length
// document.write("My Favorite Phone is: " + mobile + "<br>")
// document.write("length of String:" + l)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your brows

// var name = "Pakistan"
// var n = name.indexOf("n")
// document.write("String :" + name + "<br>")
// document.write("Index of 'n' :" + n)


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

// var a = "Hello World"
// var b = a.lastIndexOf("l")
// document.write("String :" + a + "<br>")
// document.write("Lase Index of 'l' :" + b)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var word = "Pakistani"
// var i = word.charAt(3)
// document.write("String :" + word + "<br>")
// document.write("Character at index 3 :" + i)


// 6. Repeat Q1 using string concat() method

// var a = "Q1"
// var b = a.repeat(10)
// document.write(b + "<br>")

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad"
// var r = word.replace(/Hyder/, 'Islam');
// document.write("City: " + word + "<br>")
// document.write("after Replacement: " + r)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends.They play cricket and football together"
// var rep = message.replace('and', '&')
// document.write(message + "<br>")
// document.write(rep)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num = "472"
// var ty = typeof(num)
// var con = parseInt(num)
// var typ = typeof(con)
// document.write("Value: " + num + "<br>")
// document.write("Type: " + ty + "<br>")
// document.write("Value: " + num + "<br>")
// document.write("Type: " + typ + "<br>")

// 10. Write a program that takes user input. Convert and
// show the input in capital letters

// var word = prompt("Enter Word :")
// var con = word.toUpperCase()
// document.write(word + "<br>")
// document.write(con)

// 11. Write a program that takes user input. Convert and
// show the input in title case

// var word = prompt("Enter Word :")
// var sentence = word.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write(sentence.join(" "));

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var d = 35.36;
// var s = d + '';
// s = s.replace('.', '');
// s = parseInt(s);

// document.write("Number: " + d + "<br>")
// document.write("Result: " + s)


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter Username Here!")
// for (i = 0; i <= username.length; i++) {
//     if (username[i] === ' !' || username[i] === ',' || username[i] === '.' || username[i] === '@') {
//         alert("Plese Enter Correct Username ")
//     }
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var item = prompt("Enter a product would you like to buy")
// item = item.toLowerCase()
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] == item) {
//         document.write(item, " is available at index ", i)
//         found = true;
//         break;

//     }

// }

// if (found == false) {
//     document.write(item, " not Availabe")
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var arr = university.split('');

// for (var i = 0; i < arr.length; i++) {

//     document.write(arr[i], "<br>")
// }

// 17. Write a program to display the last character of a user
// input.
// var user = "pakistan";
// document.write("Your last character is ", user.slice(-1))

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// str = str.toLowerCase();
// var counting = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 3) == 'the') {
//         counting = counting + 1;
//     }
// }

// document.write(counting);
// Task 19

// var password = prompt("Enter a password");
// a = [0,1,2,3,4,5,6,7,8,9]
// if(password.length>=6){
//   for(var i = 0;i<a.length;i++){
//     if(password[0]==a[i]){
//       document.write("Password not start with number")
//     }

//   }
// }


// else{
//   document.write("Incorrect length minimum 6")
// }
// ch 26-30

// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt("Enter a possitive integer")
// a = Math.abs(a)
// document.write("number : ", a, "<br>")
// document.write("Round off : ", Math.round(a), "<br>")
// document.write("Ceil : ", Math.ceil(a), "<br>")
// document.write("Floor : ", Math.floor(a), "<br>")

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt("Enter a Negative integer")
// document.write("number : ", a, "<br>")
// document.write("Round off : ", Math.round(a), "<br>")
// document.write("Ceil : ", Math.ceil(a), "<br>")
// document.write("Floor : ", Math.floor(a), "<br>")

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var a = -4;
// document.write("The Absolute value of ",a," is ",Math.abs(a))

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var num = Math.random() * (7 - 1) + 1;
// var num2 = Math.random() * (7 - 1) + 1;

// document.write("Random dice value :", Math.floor(num), "<br>")
// document.write("Random dice value :", Math.floor(num2))

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var num = Math.random() * (3 - 1) + 1;
// var num2 = Math.random() * (3 - 1) + 1;

// document.write("Random coin value :", Math.floor(num), "<br>")
// document.write("Random coin value :", Math.floor(num2))

// 6. Write a program that shows a random number between 1
// and 100 in your browser

// var num = Math.random() * (101 - 1) + 1;
// document.write("Random number from 1 to 100 is ", Math.floor(num))

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = parseInt(prompt("Enter your weight"))
// document.write("The Weight of user is ", weight)

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var num = Math.random() * (10 - 1) + 1;
// user = prompt("Enter a number")
// if (num == user) {
//     document.write("Congrats")
// } else {
//     document.write("Try Again")
// }

// ch 31-34
// DATE METHODS
// 1. Write a program that displays current date and time in
// your browser.'

// var a = new Date()
// document.write(a)

// 2. Write a program that alerts the current month in words.
// For example December.

// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// var a = new Date()
// document.write(monthNames[a.getMonth()])

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// dayname = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sat']
// var a = new Date()
// var day = dayname[a.getDay()]
// document.write(day.slice(0, 3))

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// dayname = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sat']
// var a = new Date()
// var day = dayname[a.getDay()]
// if (day == dayname[6] || day == dayname[0]) {


//     document.write("Its funday")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var a = new Date()
// var day = a.getDate()
// if (day < 16) {
//     var msg = "First fifteen days of the month";
// } else {
//     document.write("Last days of the month")

// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date()
// var milSecond = date.getTime()
// var min = (milSecond / (1000 * 60)).toFixed(1)
// document.write("Current Date is ", date, "<br>")
// document.write("Millisecond from january 1 ,1970 ", milSecond, "<br>")
// document.write("Minutes from january 1 ,1970 ", min, "<br>")

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date()
// var hour = date.getHours()
// if (hour < 12) {
//     document.write("Its am")
// } else {
//     document.write("Its pm")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var date = new Date("Dec 31,2020")
// document.write(date)
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan ?
//     Note : 1 st Ramadan was on June 18, 2015

// var ramzanFirst = new Date("April 25,2020").getTime()
// var currentDate = new Date().getTime()
// var diff = currentDate - ramzanFirst
// var res = diff / (1000 * 60 * 60 * 24)
// document.write(Math.floor(res), " Days passed since 1st ramzan")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var Reference = new Date("2020").getTime()
// document.write(Reference, " Seconds had passed since begning of 2020")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var a = new Date()
// document.write("Current date and time is ", a, "<br>")
// var b = a.getHours()
// var c = new Date()
// c.setHours(b - 1)
// document.write("Time 1 hour a ago", c)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var a = new Date();
// document.write("Current date is ", a, "<br>");
// var b = a.getFullYear();
// var c = new Date();
// c.setFullYear(b - 100);
// document.write(c)

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

// var age = 22;
// var currentYear = 2020;
// document.write("Your birth year is ", currentYear - age)

// 14. Write a program to generate your K - Electric bill in your
// browser.All the amounts should be rounded off to 2
// decimal places.Display the following fields:
//     a.Customer Name
// b.Current Month
// c.Number of units
// d.Charges per unit
// e.Net Amount Payable(within Due Date)
// f.Late Payment Surcharge
// g.Gross Amount Payable(after Due Date)
// Where,

// document.write("<h1>", "K-Electric Bill", "</h1>", "<br>");
// var customerName = "shoaib";
// var curentMonth = "june";
// var NumberOfUnit = 200;
// var perUnit = 16;
// var amount = 0;
// var lateamount = 200;

// document.write("CustomerName : ", customerName, "<br>")
// document.write("Month : ", curentMonth, "<br>")
// document.write("Number of Units : ", NumberOfUnit, "<br>")
// document.write("Charge per unit : ", perUnit, "<br><br><br>")



// document.write("Net Amount payable with due date : ", 200 * 16, "<br>")
// document.write("surcharge : ", lateamount, "<br>")
// document.write("After due date : ", (200 * 16) + 200, "<br>")

// ch 35-38
// FUNCTIONS

// 1. Write a function that displays current date & time in your
// browser

// function date() {
//     var d = new Date()
//     document.write(d)
// }
// date()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function name(a, b) {
//     var fullname = a + b;
//     document.write(fullname)
// }

// name("Mohammed", 'Shoaib');

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function add() {
//     var a = +prompt("Enter a firstname");
//     var b = +prompt("Enter a Lastname");

//     var c = a + b;
//     document.write(c)
// }

// add()

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(number1, operator, number3) {

//     if (operator == "+") {
//         return number1 + number3;
//     } else if (operator == "-") {
//         return number1 - number3;
//     } else if (operator == "*") {
//         return number1 * number3;
//     } else if (operator == "/") {
//         return number1 / number3;
//     }
// }

// var Result = calculator(1, "+", 2)
// document.write(Result, "<br>")

// var Result = calculator(1, "-", 2)
// document.write(Result, "<br>")

// var Result = calculator(1, "*", 2)
// document.write(Result, "<br>")

// var Result = calculator(1, "/", 2)
// document.write(Result, "<br>")

// 5. Write a function that squares its argument.

// function Square(a) {
//     return a * a;
// }

// var result = Square(2);
// document.write(result)

// 6. Write a function that computes factorial of a number.

// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// var a = factorialize(5);
// document.write(a)

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function count(s, e) {
//     for (var a = s; a <= e; a++) {
//         document.write(a, "<br>");
//     }
// }

// count(1, 10)

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function geometric() {
//     var base = prompt("Enter a base value");
//     var perpendicualar = prompt("Enter a perpendicular");
//     var hyp = base * base + perpendicualar * perpendicualar

//     function square(hyp) {

//         document.write("your hypothenous is ", hyp * hyp)
//     }

//     square(hyp);

// }

// geometric();

// 9. Write a

// function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
//     i.Arguments as value
// ii.Arguments as variables

// function Area(w, h) {


//     return w * h;
// }

// var height = 4
// var result = Area(2, height)
// document.write(result)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function reverse() {

//     var a = prompt("Enter a word");
//     var str = a.split("").reverse().join("");

//     if (str == a) {

//         document.write(str, "<br>");
//         document.write("word is palidrom");
//     } else {
//         document.write(str, "<br>");
//         document.write("word is not palidrom");
//     }
// }

// reverse();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function firstLetter() {
//     var a = prompt("Enter a string");
//     var b = a.split(" ")
//     for (var i = 0; i < b.length; i++) {

//         document.write(b[i].charAt(0).toUpperCase() + b[i].substr(1), "<br>")
//     }
// }

// firstLetter();

// 12. Write a JavaScript
// function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING: 'Web Development Tutorial'
// EXPECTED OUTPUT: 'Development'

// function longword(string) {

//     var str = string.split(" ");
//     var long = 0;
//     var word = null;

//     for (var i = 0; i < str.length; i++) {
//         if (long < str[i].length) {
//             long = str[i].length;
//             word = str[i];
//             document.write(word)

//         }
//     }

// }

// longword("shoaib is good")

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function charCount(str, letter) {

//     var len = 0;
//     for (var i = 0; i < str.length; i++) {

//         if (str.charAt(i) == letter) {

//             len = len + 1;

//         }
//     }
//     document.write(len);
// }

// charCount("shakeeb", "e")

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function Circumference() {

//     var a = prompt("Enter a radious");
//     var result = 2 * 3.13 * a;
//     document.write("The circumference is ", result)
// }

// Circumference();


// function AreaCircle() {

//     var a = prompt("Enter a radious");
//     var result = 3.14 * Math.sqrt(a);
//     document.write("The Area of circle is ", result)

// }

// AreaCircle();