// 1. maltiplication table.

/*    let n = +prompt("enter multi number:");
    let i = 1;

    while(i <= 10)
    {
        console.log(n + "x" + i + "=" + (n*i));
        i++
    }

    output:

    56x1=56
    56x2=112
    56x3=168
    56x4=224
    56x5=280
    56x6=336
    56x7=392
    56x8=448
    56x9=504
    56x10=560
*/


// 2. factorial number.

 /*   let num = +prompt("enter any fact number:");
    let fact = 1; 

    while(num >= 1)
    {
        fact = fact * num;
        num--;
        
    }
     console.log("factorial is:",fact);

output:

factorial is: 2.585201673888498e+22

*/

// 3.armstrong number.

/*    let n = prompt("enter any values : ");
    let original = n;
    let reverse = 0;

    do 
{
    let reminder = n % 10;
    reverse = reverse + reminder ** 3;
    n = Math.floor(n / 10);
} 
    while(n > 0);

    if(original == reverse) 
    {
        console.log("NUMBER IS ARMSTRONG👍");
    } 
    else 
    {
        console.log("NUMBER IS NOT ARMSTRONG👎");
    }

output:

NUMBER IS NOT ARMSTRONG

*/

  // 4. palindrom number.

 /*    let number = prompt("enter any values : ");
  let original = number;
  let reverse = 0;

  
  while(number > 0)

{
    let reminder = number % 10;
    reverse = (reverse * 10) + reminder;
    number = Math.floor(number / 10);
} 
  

  if(original == reverse) 
  {
      console.log("palindrome number");
  } 
  else 
  {
      console.log(" not  palindrome number");
  }

  output:45

  not  palindrome number

*/

  //5. fibbonacci series.

 /* let x= 2 , z= 2 , y;

  console.log(x);
  console.log(z);

    for(let i = 2; i <=10 ; i++)
    {
        y = x + z;
        console.log(y);
        x = z;
        z = y;
    }

    output:

    2
    2
    4
    6
    10
    16
    26
    42
    68
    110
    178
*/


  //6.add all interger between 0 and 30 and display total.

 /*   let sum = 0 , i;

    for(i= 1 ; i<=30 ; i++)
    {
        sum = sum + i;
    }
        console.log("sum of number", sum);

    output:

    sum of number 465

*/

  //7. iterates the integers from 1 to 100.for multiple of three print "fizz"
  //      insted of the number and multiple of five print "buzz" number which are


/*/  let num=1;
    
  do 
  {
      if (num % 3 === 0 && num % 5 === 0)
      {
          console.log("FizzBuzz");
      } 
      else if (num % 3 === 0) 
      {
          console.log("Fizz");
      } 
      else if (num % 5 === 0)
     {
          console.log("Buzz");
      } 
      else 
      {
          console.log(num);
      }
      num++;
  } 
  while (num <= 100);


  output : 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz

*/
  

// 8.  1,2,3,4,5,6,8,9,10 on one line using for loop,there will be no hypen(-) at starting or ending.

/* let res = "";

     for (let i = 1; i <= 10; i++) 
    {
     res += i;
     if (i < 10)
    {
         res += "-"; 
     }
 }

     console.log(res);

output:

1-2-3-4-5-6-7-8-9-10
*/


// 9. 1+4+9+16+....+100=385 on one line using for loop.


/* let sum = 0;
let result = "";

for (let i = 1; i <= 10; i++) {
    sum += i * i;
    result += (i * i) + (i < 10 ? "+" : ""); 
}

console.log(result + " = " + sum);

output:

1+4+9+16+25+36+49+64+81+100 = 385

*/


// 10. nested loop pattern.

/*let i,j;

for ( i = 5; i >= 1; i--) {
    let result = "";
    for ( j = 5; j >= i; j--) {
        result += j + " ";
    }
    console.log(result);
}

output:
5 
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1 

*/
// 11. pattern.


/* let num = 1;

    for (let i = 1; i <= 5; i++) 
{ 
    let result = "";

    for (let j = 1; j <= i; j++) 
    {
        result += num + " ";
        num++; 
    }
    console.log(result); 
}

output:

1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

*/