            /** Assingment 1 */

//   Q1. Write a function to get the sum of n natural numbers. 

//   function numberSum(N) {
//     var total = 0;
//       for(var i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }


//   Q2. write the function to check if the number is even or not by using only if else statement 
  
//   function oddOrEven(x) {
//     return ( x & 1 ) ? "odd" : "even";
//   }
  
//   function checkNumber(argNumber) {
//     document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
//   }


//   Q3. Write a function it check if the number is prime or not.
  
//   function isPrime(num) {
//     if (num === 2) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
  
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
  
//   }

//   Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only

//   function weekDay(n){
//     let ans='';
//     switch(n){
//         case 1: ans='monday';
//             break;
//         case 2: ans='tuesday';
//             break;
//         case 3: ans='wednesday';
//             break;
//         case 4: ans='thursday';
//             break;
//         case 5: ans='friday';
//             break;
//         case 6: ans='satuday';
//             break;
//         case 7: ans='sunday';
//             break;
//             default : ans='invalid Input';
//     }                                                                     return ans;
// }

// //Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

// function weekDay(N){
//     if(N==1)
//         console.log('monday');

//     if(N==1)
//         console.log('tuesday');
    
//     if(N==1)
//         console.log('wednesday');
    
//     if(N==1)
//         console.log('thursday');
    
//     if(N==1)
//         console.log('friday');
    
//     if(N==1)
//         console.log('satuday');
    
//     if(N==1)
//         console.log('sunday');
    
//     else
//         console.log('invalid Input');
// }


// // Q7. WAF to search an element in the array?

// function search(a,x)
// {
//     const searchValue = a.find(ele => ele==x)
//     return searchValue;
// }

//     if(search([9,8,1,6,5,3,2,7],7))
// {
//     console.log("Element is searched")
// }
//     else
// {
//     console.log("Element is Not searched")
// }


// // Q8. WAF to find the max in the array

// function maximun(Input)
// {
//     return Math.max(...Input);
// }

// console.log(maximun([9,8,1,6,5]))


// // Q9. WAF to find the min in the array?

// function minimum(input)
// {
//         return Math.min(...input)
// }
    
//     console.log(minimum([9,8,1,6,5]))


// // Q10. WAF to find the factorial of n

// function factorial(n)
// {
//     if(n===0 || n===1)
//     return 1;
//     else 
//     {
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(5))



// // Q11. WAF to reverse an array

// function reverse(Input)
// {
//     let output = Input.reverse();
//     return output;
// }

// console.log(reverse([9,8,1,8,6,5,3,2]))



// // Q12. WAF to reverse a string.

// function reverseString(str)
// {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Hello World"))


// // Q13. WAF to check if the number is a palindrome or not.

// function palindrome(n)
// {
//     let temp,reverse=0;
//     while(n!=0)
//     {
//         temp=n%10;
//         reverse=(rev*10)+temp;
//         n=parseInt(n/10);
//     }
//     return reverse;
// }

// let n=121;
// if(palindrome(n)===n)
// {
//     console.log("It is a Palindrom Number");
// }
// else
// {
//     console.log("Not a Palindrom Number")
// }




                    /** Assingment 2 */


// // Q1. WAF to check if the string entered is the palindrome string or not.

// function palindrome(string)
// {
//     let arrayValue=string.split('');
//     let reverseArray=arrayValue.reverse();
//     let str2=reverseArray.join('');
//     (string===str2)?console.log("It's a palindrom"):console.log("Not a palindrome");
// }
// palindrome("Buckey");

// palindrome("kartrak")


// // Q2. WAF to count the number of words in the string.

// function countString(str)
// {
//     console.log(str.split('').length);
// }
// countString("Buckey")


// // Q3. WAF to print the number of days in the month using switch case.

// function noOfDays(month)
// {
//     switch(month)
//     {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//         console.log("31 day's");
//         break;

//         case 2:
//         console.log("28/29 day's");
//         break;    

//         case 4:
//         case 6:
//         case 9:
//         case 11:
//         console.log("30 day's");
//         break;
//     }
// }

// noOfDays(2);

// // Q4. WAF to check if the number is 0, -ve or +ve using switch case.

// function check(num)
// {
//     switch(Math.sign(num))
//     {
//         case 1:
//         console.log("Positive Number");
//         break;
//         case 0:
//         console.log("Zero Number");
//         break;    
//         default:
//         console.log("Negative Number");
//     }
// }

// check(-541)


// // Q5. WAF to check if the number is even or not using if else

// function evenorodd(num)
// {
//     (num%2==0)?console.log("Number is even"):console.log("Number is Odd");
// }

// evenorodd(4890)

// // Q6. WAF to check if the number is even or not using switch case.

// function evenodd(num)
// {
//     switch(num%2)
//     {
//         case 0:
//         console.log("it's Even Number");
//         break;
//         case 1:
//         console.log("it's Odd Number");
//         break;    
//     }
// }

// evenodd(156)


// // Q7. WAF to reverse only words in the string.

// function reversewords(str){
//     var arrayval=str.split(' ').map(word => word.split('').reverse().join(''));
//     console.log(arrayval);
// }

// reversewords("Hello World")


// // Q8. WAF to count the occurrence of a given characters in the string.


// function occurrenceofchar(str,letter){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) == letter){
//             count+=1;
//         }
//     }
//     console.log(`${letter} is occured at ${count} times`);
// }

// occurrenceofchar("buckeye",'e')
