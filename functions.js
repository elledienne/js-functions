/*  @@ -3,21 +3,27 @@
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(number){
	return number.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(number){
	return number+1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(number){
	return number-1;
}

/**
 * Adds two numbers.
@@ -25,7 +31,9 @@
 * @param {number} y
 * @return {number} the sum
 */

function add(x, y){
	return x+y;
}

/**
 * Subtracts the second number from the first.
@@ -33,7 +41,9 @@
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x, y){
	return x-y;
}

/**
 * Multiplies two numbers.
@@ -41,7 +51,9 @@
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y){
	return x*y;
}

/**
 * Divides the first number by the second.
@@ -49,14 +61,18 @@
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x, y){
	return x/y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
	return x*x;
}

/**
 * Performs a mathematical operation on two numbers.
@@ -66,7 +82,29 @@
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y){
	var result, str;
	switch(operation){
		case "add":
			result = x+y;
			str = x+" + "+y+" = "+result;
			break;
		case "subtract":
			result = x-y;
			str = x+" - "+y+" = "+result;
			break;
		case "multiply":
			result = x*y;
			str = x+" * "+y+" = "+result;
			break;
		case "divide":
			result = x/y;
			str = x+" / "+y+ " = "+ result;
			break;
	}
	console.log(str);
	return result;
}

/**
 * Returns true if `a` is greater than `b`.
@@ -74,7 +112,9 @@
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a, b){
	return a>b;
}

/**
 * Returns true if `a` is less than `b`.
@@ -82,7 +122,9 @@
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b){
	return a<b;
}

/**
 * Returns true if `a` and `b` are equal.
@@ -90,7 +132,9 @@
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a,b){
	return a===b;
}

/**
 * Returns the smallest value of two numbers.
@@ -98,7 +142,9 @@
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(a,b){
	return (a>b)?b:a;
}

/**
 * Returns the largest value of two numbers.
@@ -106,21 +152,27 @@
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(a,b){
	return (a>b)?a:b;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
	return (n%2==0)?true:false;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){
	return ( n % 2 === 0 ) ? false : true;
}

/**
 * Returns a letter grade.
@@ -133,6 +185,22 @@
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, maxScore){
	var perc = score*100/maxScore;
	var str = "";
	if(perc >= 90){
		str = "A";
	} else if (perc >= 80){
		str = "B";
	} else if (perc >= 70){
		str = "C";
	} else if (perc >= 60){
		str = "D";
	} else {
		str = "F";
	}
	return str;
}


/**
@@ -142,7 +210,14 @@
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(obj){
	if(obj.reviews !== undefined){
		obj.reviews++;
	} else {
		obj.reviews = 1;
	}
	return obj;
}

/**
 * Joins two strings with a space.
@@ -150,7 +225,9 @@
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(a, b){
	return a+" "+b;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
@@ -159,4 +236,9 @@
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(r){
	return {
		circumference: 2 * Math.PI * r,
		area: r*r*Math.PI
	}
}
