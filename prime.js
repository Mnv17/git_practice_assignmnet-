function checkPrime(num) {
  let count = 0;

  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }