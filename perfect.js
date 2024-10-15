function isPerfectNumber(n) {

	// Guard Clause for non-positive
	// or non-integer input
	if (!Number.isInteger(n) || n <= 0) {
		console.log("Please provide a valid positive integer.");
		return false;
	}

	let sum = 0;

	// Loop to find proper divisors 
	// and calculate the sum
	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}

	// Check if the sum of proper divisors
	// equals the original number
	const isPerfect = sum === n;

	// Output the result
	if (isPerfect) {
		console.log(`${n} is a perfect number.`);
	} else {
		console.log(`${n} is not a perfect number.`);
	}

	return isPerfect;
}

// Example 1
isPerfectNumber(25);

// Example 2
isPerfectNumber(6);
