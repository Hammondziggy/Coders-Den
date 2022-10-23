/***************** Exercise Level 1 *******************/

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
//const data = ("firstName = 'Tobi', lastName = 'jemme', city = 'Helsinki', age = 30, isMarried = true " )
let firstName = "Tobi";
let lastName = "Jemme";
let country = "Germany";
let city = "Helsinki";
let isMarried = true;
let age = 30;
let year = 2022;

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(isMarried), typeof(age), typeof(year));

//Check if type of '10' is equal to 10
console.log(parseInt('10') === 10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
console.log(4 > 3);
console.log(4 == 4);
console.log(4 > 3 && 10 < 12);

//Write three JavaScript statement which provide falsy value.
console.log(4 === '4');
console.log(!(4 > 3));
console.log(!(('python' && 'dragon').includes('on')));

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//Find the length of python and jargon and make a falsy comparison statement
console.log(!("python").length === ("dragon").length);

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//There is no 'on' in both dragon and python
console.log(!(('python' && 'dragon').includes('on')));

//Use the Date object to do the following activities
let todayYear = new Date();

//What is the year today?
console.log(todayYear.getFullYear());


//What is the month today as a number?
console.log(todayYear.getMonth() + 1);

//What is the date today?
console.log(todayYear.getDate());


//What is the day today as a number?
console.log(todayYear.getDay() + 1);

//What is the hours now?
console.log(todayYear.getHours());

//What is the minutes now?
console.log(todayYear.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let prevYearSec = 1970 * 31536000;
let  currentDateSec = new Date().getFullYear() * 31536000;
let numOfSecsElapsed = currentDateSec - prevYearSec;
console.log(numOfSecsElapsed);

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = +prompt("Enter a number");
let height = +prompt("Enter a number");
console.log("The area of the triangle is " + 0.5*base*height);


//Enter base: 20
//Enter height: 10

//The area of the triangle is 100
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)

let a = +prompt("Enter side a: ");
let b = +prompt("Enter side b: ");
let c = +prompt("Enter side c: ");

let perimeter = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = +prompt("Enter length");
let width = +prompt("Enter width");
let area = length * width;
let sum = length + width;

console.log(area);
console.log(sum * 2);


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = +prompt("Enter number");
let areaOfCircle = 3.14 * radius**2;
let circumference = 2 * 3.14* radius;

console.log(areaOfCircle);
console.log(circumference);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slopeM = 2
let y = 0
let yIntercept = -2
let xIntercept = y + 2/2
console.log(xIntercept);
//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2 - y1) / (x2 - x1);
console.log(m);

//Compare the slope of above two questions.
console.log(slopeM == m);

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 4;
let y3 = x**2 + 6 * x + 9;
console.log(y3);


//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hour = +prompt('Enter hours: ');
let ratePerHour = +prompt('Enter rate per hour: ');
let pay = ratePerHour * hour;
console.log(`Your weekly earning is ${pay}`);

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "Israel";
name > 7 ?console.log('your name is long'):console.log('your name is short');

//Compare your first name length and your family name length and you should get this output.

let firstName = 'Israel'
let lastName = 'Zorzor'
//Your first name, Asabeneh is longer than your family name, Yetayeh
firstName > lastName ?console.log(`My first name, ${firstName} is longer than my family name, ${lastName}`): console.log('My first name is  not longer than my family name');

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let dateOfBirth = +prompt('Enter birth year: ');
let age = new Date().getFullYear() - dateOfBirth;
let drivingAge = 18;
let ageGap = drivingAge - age;
//Enter birth year: 1995
//You are 25. You are old enough to drive
age >= 18 ?console.log(`You are ${age}. You are old enough to drive`):console.log(`You are ${age}. You will be allowed to drive after ${ageGap} years`);

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = +prompt("Enter number of years you've lived: ");
let secsPerYear = 31536000;
let hundredYearsPerSec = secsPerYear * 100;
years = years * secsPerYear;
console.log(hundredYearsPerSec - years);


//Enter number of years you live: 100
//You lived 3153600000 seconds.

//Create a human readable time format using the Date time object
let now = new Date()
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minute = now.getMinutes();
//YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date}  ${("0" + hours).slice(-2)}:${minute}`);
//DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year}  ${("0" + hours).slice(-2)}:${minute}`);
//DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year}  ${("0" + hours).slice(-2)}:${minute}`);
/**************Exercises: Level 3*****************/

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(`${year}-${("0" + month).slice(-2)}-${("0" + date).slice(-2)}  ${("0" + hours).slice(-2)}:${("0" + minute).slice(-2)}`);
