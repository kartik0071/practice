  Q1. Write a function to get the sum of n natural numbers. 

  function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }

  Q2. write the function to check if the number is even or not by using only if else statement 
  
  function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
  }
  
  function checkNumber(argNumber) {
    document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
  }

  Q3. Write a function it check if the number is prime or not.
  
  function isPrime(num) {
    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }

  Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only

  function weekDay(n){
    let ans='';
    switch(n){
        case 1: ans='monday';
            break;
        case 2: ans='tuesday';
            break;
        case 3: ans='wednesday';
            break;
        case 4: ans='thursday';
            break;
        case 5: ans='friday';
            break;
        case 6: ans='satuday';
            break;
        case 7: ans='sunday';
            break;
            default : ans='invalid Input';
    }                                                                     return ans;
}