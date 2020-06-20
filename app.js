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

var num = Math.random() * (10 - 1) + 1;
user = prompt("Enter a number")
if (num == user) {
    document.write("Congrats")
} else {
    document.write("Try Again")
}