/* Euler 1 */
function multiples(num) {
    num = num - 1;
    if (num < 1) {
        return num;
    } else if (num % 3 == 0 || num % 5 == 0) {
        return multiples(num) + num;
    }
    return multiples(num);
}

multiples(1000); // 233168

/* Euler 2 */
function evenFib(num) {
    if (num == 0) return num;
    if (num < 2) return 2;

    const x = evenFib(num - 1) * 4 + evenFib(num - 2);

    if (x > 4000000) return "Number is bigger than 4000000";

    return evenFib(num - 1) * 4 + evenFib(num - 2);
}

evenFib(11);

/* Euler 3 */
function largestPrime(num, counter) {
    if (num % counter !== 0) {
        return largestPrime(num, counter + 1);
    } else {
        if (counter !== num) {
            return largestPrime(num / counter, counter);
        }
        return counter;
    }
}

largestPrime(600851475143, 2);

/* Euler 4 */
// Without recursion
let arr = [];
for (let i = 999; i > 500; i--) {
    for (let j = 100; j < 999; j++) {
        if (isPalindrome(i * j)) {
            arr.push(i * j);
        }
    }
}

console.log(Math.max(...arr));

const isPalindrome = (num) => {
    const reversed = num.toString().split("").reverse().join("");

    return num.toString() == reversed;
};

// Using recursion but only if we consider that largest palindrome will be counted to 750 (from 999).
function largestPalindromeOfThree(firstNum, secondNum, sum = 0, i = 750) {
    if (isPalindrome(firstNum * secondNum)) {
        if (firstNum + secondNum > sum) {
            sum = firstNum + secondNum;
            i = secondNum;

            return largestPalindromeOfThree(firstNum - 1, secondNum, sum, i);
        }
    } else if (secondNum == i || firstNum + secondNum < sum) {
        return largestPalindromeOfThree(firstNum - 1, 999, sum, i);
    } else if (secondNum > i) {
        return largestPalindromeOfThree(firstNum, secondNum - 1, sum, i);
    }
    return firstNum * secondNum;
}

largestPalindromeOfThree(999, 999);

/* Euler 5 */
function findNOD(max, min) {
    let counter = max + 1;
    while (counter % max !== 0 || counter % min !== 0) {
        counter += 1;
    }
    return counter;
}

function smallestMultiple(max, result = 1, counter = 2) {
    if (counter !== max) {
        if (result % counter !== 0) {
            const nodNum = findNOD(result, counter);
            return smallestMultiple(max, nodNum, counter);
        } else {
            return smallestMultiple(max, result, counter + 1);
        }
    }
    return result;
}
smallestMultiple(20);
