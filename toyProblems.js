//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
	reverseIt: (string) => {
		return string.split('').reverse().join('');
	},

	//uncomment and finish the reverseIt function. It will take in one parameter which is a String and
	//reverse it

	removeDups: (arr) => {
		const answer = [];
		for (let i = 0; i < arr.length; i++) {
			if (answer.includes(arr[i])) {
			} else {
				answer.push(arr[i]);
			}
		}
		return answer;
	},

	//uncomment and finish the removeDups function. It will take in one parameter which is an Array
	//remove all duplicates

	titleIt: (string) => {
		let lastValue = ' ';
		const answer = [];

		for (let i = 0; i < string.length; i++) {
			if (lastValue === ' ') {
				answer.push(string[i].toUpperCase());
			} else {
				answer.push(string[i]);
			}
			lastValue = string[i];
		}
		return answer.join('');
	},

	//uncomment and finish the titleIt function. It will take in one parameter which is a String and
	//capitalize the first letter of each word

	vowelCounter: (string) => {
		const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
		let count = 0;

		for (let i = 0; i < string.length; i++) {
			if (vowels.includes(string[i].toLowerCase())) {
				count++;
			}
		}
		return count;
	},

	//uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
	//return the number of vowels in the string

	isPrime: (num) => {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return num > 1;
	},

	//uncomment and finish the isPrime function. It will take in one parameter which is a Number and
	//return true if it is prime and false if it is not

	//what is the value of foo?
	// var foo = 10 + '20';
	//uncomment the foo property and give your answer as its value

	foo: '1020',

	//what is the outcome of the two console.logs below?
	//   var foo = "Hello";
	// (function() {
	//   var bar = " World";
	//   console.log(foo + bar);
	// })();
	// console.log(foo + bar);
	// uncomment the log1 and log2 properties and give your answers as their values

	log1: 'Hello World',
	log2: undefined
};
