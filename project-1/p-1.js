//1. area of triangle

    let  len= 12 , width=10 , triangle;

    triangle= 1/2*len*width;
    console.log("area of triangle:",triangle);

// output
//  area of triangle: 60

    

// 2.convert celsius to fahrenheit.

    let celsius=13 , fahrenheit;

    fahrenheit = (celsius *  9/5) + 32;
    console.log("fahrenheit :" , fahrenheit);

// output
// fahrenheit : 55.4


//3.area of ractangle.

    let l = 15 , w = 18 , ractangle;

    ractangle = (l * w);
    console.log("area of ractangle:",ractangle);

//output
// area of ractangle: 270


//4.area of circle

    let circle , pi=3.14 , r=12;

    circle = pi *r*r;
    console.log("area of circle:",circle);

//output
// area of circle: 452.15999999999997



//5.covert feet into inches

    let feet=12 , inches;

    inches = feet * 12;
    console.log("feet into inches:",inches);

//output
// feet into inches: 144


//6.calculate given formulas

//1. a2 - b2 = (a-b) (a+b)

    let a= 12 , b=32 , c=19 , formula1;

    formula1 = (a*a) - (b*b) === (a-b) * (a+b);
    console.log("answer :", formula1);

//output
// answer : true

//2.(a2-b2) = a2 - 2ab + b2

    let formula2;

    formula2 = (a-b) * (a-b) === (a**2) - (2*a*b) + (b**2);
    console.log("answer :", formula2);


//output
// answer : true


//3.(a+b+c)2 = a2 + b2 + c2 + 2ab + 2ac + 2bc

    let formula3;

    formula3 = (a+b+c) * (a+b+c) === (a*a) + (b*b) + (c*c) + (2*a*b) + (2*a*c) + (2*b*c);
    console.log("answer :", formula3);

//output
// answer : true


//4. (a-b-c)2 = a2 - b2 - c2 - 2ab - 2ac - 2bc

    let formula4;

    formula4 = (a-b-c) * (a-b-c) === (a*a) + (b*b) + (c*c) - (2*a*b) - (2*a*c) + (2*b*c);
    console.log("answer :", formula4);

//output
// answer : true


//5.(a-b)3 = a3 - 3a2b + 3ab2 - b3


    let formula5;

    formula5= (a-b) * (a-b) * (a-b) === (a*a*a) - (3*a*3*b) + (3*a*3*b) - (b*b*b);
    console.log("answer :", formula5);


//output
//answer : false
