// 1. sample array

   // let mycolor = ["red","green","white","black"];

    /*   console.log(mycolor.join());
       
       output:

       red,green,white,black
    */

     
     /*console.log(mycolor.join('+'));

        output:

        red+green+white+black
    */

    /*    console.log(mycolor.slice(0,3).join(','));

        output:

        red,green,white
    */


      /*      console.log(mycolor.slice(0,1).join(''));

            output:

            red
    */

    /*    console.log(mycolor.slice(1,3).join(','));

        output:

        green,white

    */

     /*   console.log(mycolor.slice().join(',')+",orange");

        output:

        red,green,white,black,orange

    */

//===============================================================================================================


// 2. sum of array  element.


 /*      let numbers=[20,34,45,12,34,87];

    let length = numbers.length;

    let sum = 0 , i;

        for(i=0 ; i<length ; i++)
         {
             sum += numbers[i];
         }
        
         console.log("Sum of these numbers is : ",sum);


//    output:

  //  Sum of these numbers is :  232


// foreach loop

    sum = 0;

     numbers.forEach(numbers => {
       sum += numbers;
     });

    console.log("Using foreach method Sum of these numbers is : ", sum);

     output:

     Using foreach method Sum of these numbers is :  232
*/
//=============================================================================================================

// 3.maximum and minimum values

 /*   let num = [21,56,23,21,85,95,87,65,2,3];
    let maximum = num[0]; 

 for (let i = 1; i < num.length; i++) {
     if (num[i] > maximum) {
         maximum = num[i]; 
     }
 }

 console.log("The maximum value in the array is:", maximum);

    output:

    The maximum value in the array is: 95

    

    let minimum = num[0]; 

     for (let i = 1; i < num.length; i++) 
        {
         if (num[i] < minimum) 
        {
             minimum = num[i]; 
         }
     }
    
     console.log("The minimum value in the array is:", minimum);
 */

//====================================================================================================

// 4. acclii values.

 /*    let array = ["a","g","h","$"];

     for (let i = 0; i < array.length; i++)
     {
       console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
     }

output:

ASCII value of a is 97
ASCII value of g is 103
ASCII value of h is 104
ASCII value of $ is 36
*/
//=======================================================================================================

// 5.Write a JavaScript program to remove negative values using the filter array function.


 /*    let numbers = [-23,65,-78,23,23,59,89,28,-98,-77];

     let positiveNumbers = numbers.filter((number) => number >= 0);
     console.log(positiveNumbers);


output:

[65, 23, 23, 59, 89, 28]

*/

// ==========================================================================================================================

// 6. array map() method and return the square of the array element.
//  let array = [2, 5, 6, 3, 8, 9]


 /*    let array = [9,8,7,6,5,4,3,2,1];

     let squareArray = array.map((number) => number * number);

     console.log(squareArray);

output:

[81, 64, 49, 36, 25, 16, 9, 4, 1]
*/

// ==========================================================================================================================

// 7. sorting an array in ascending descending.
// numbers = [12,5, 0, 1, 5, 12, 19, 20];
//   myColor = ["Red", "Green", "White", "Black"];



/*     let numbers = [23,45,67,98,12,45,0,3,6,8];
     let myColor = ["Red", "Green", "White", "Black","Orange","Pink","Blue"];

     let ascendingNumbers = numbers.sort((a, b) => a - b);
     console.log(ascendingNumbers);

     let descendingNumbers = numbers.sort((a, b) => b - a);
     console.log(descendingNumbers);

     let ascendingColor = myColor.sort();
     console.log(ascendingColor);

     let descendingColor = myColor.sort().reverse();
     console.log(descendingColor);

output:

[0, 3, 6, 8, 12, 23, 45, 45, 67, 98]
[98, 67, 45, 45, 23, 12, 8, 6, 3, 0]
['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Red', 'White']
['White', 'Red', 'Pink', 'Orange', 'Green', 'Blue', 'Black']

*/
// ==========================================================================================================================


// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
//words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

/*
 let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


     let filterWords = words.filter((word) => word.length >= 8);
     console.log(filterWords);

 output:

 ['Javascript']

 */

// ==========================================================================================================================

// 9. write a JavaScript program to print expected output for the following string.

/*
     let x = "oxoxoxox";
     let output = x.replace(/x/g, "X");
     console.log(output);

     let y = "A New Java Book";
       let java = y.toUpperCase().split(" ").join(" ");
         console.log(java);
*/
// output: 
// oXoXoXoX
// A NEW JAVA BOOK




// ==========================================================================================================================

// 10. write a JavaScript program for array reverse.

  /*   let array = [1, 2, 3, 4, 5];

     let reverseArray = array.reverse();
     console.log(reverseArray);

*/
// output: 
//  [5, 4, 3, 2, 1]



// ==========================================================================================================================

// 11. write a JavaScript program to check if a value is found or not?

 /*    let array = [1, 2, 3, 4, 5 ,6]; 

     let checkValue = array.includes(6);
 
    console.log(checkValue);
    */

// output:
//  true



// ==========================================================================================================================


// 12. write a JavaScript program to print your name and write the number of total characters.


  /*   let name = "resha nakrani";

     let totalCharacter = name.length;
     console.log(totalCharacter);
*/
// output:

// 13



// ==========================================================================================================================


// 13. write a JavaScript program given this output using replace concept.


 /*    let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";


     let output = input.replace(dog/g, "cat");
     console.log(output);


// output: 


I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning.
*/
// ==========================================================================================================================




// 14. write a JavaScript program convert string to array.


/*     let input = "Hire the top 1% freelance developers";

     let output = input.split(" ");
     console.log(output);

// output: 

// ['Hire', 'the', 'top', '1%', 'freelance', 'developers']

*/

// ==========================================================================================================================

// 15. write a JavaScript program to convert an array to string.


  /*   let input = ['8', 10, 'heney','resha'];

     let output = input.toString();
     console.log(output);

output:

8,10,heney,resha

 */