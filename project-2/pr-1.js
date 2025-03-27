// 1. enter electricity uniit and calcuate amount to pay.

    let unit = 250,totalbill,subcharge,finalamount;

    if(unit <= 50)
    {
        totalbill = unit * 1;
        console.loog("the electricity bill is:", totalbill, "rs");
    }
    else if(unit <= 150)
    {
        totalbill = ((unit - 50)* 2) + (50*1);
        console.loog("the electricity bill is:", totalbill, "rs");
    }
    else if(unit <= 250)
    {
        totalbill = ((unit - 150)* 3)+(100*2) + (50 * 1);
        subcharge = totalbill*0.2;
        finalamount = totalbill + subcharge;

        console.log("the electricity bill is:", totalbill, "rs");
        console.log("subcharge", subcharge,"rs");
        console.log("the final amount pay is :", finalamount,"rs");
    }
    else
    {
        totalbill = ((unit - 250)* 4)+(100*3)+(100*2)+(50 * 1);
        subcharge = totalbill*0.2;
        finalamount = totalbill + subcharge;

        console.log("the electricity bill is:", totalbill, "rs");
        console.log("subcharge", subcharge,"rs");
        console.log("the final amount pay is :", finalamount,"rs");
    }
// 2. switch case.

   let season = +prompt("enter season month");
   console.log("choose the month :" , season);

   switch(season)
   {
        case 1 :
        case 2 :
        case 3 :
        case 4 :

        console.log("winter season :",season);
        break;

        case 5 :
        case 6 :
        case 7 :
        case 8 :

        console.log("summer season :",season);
        break;

        
        case 9 :
        case 10 :
        case 11 :
        case 12 :

        console.log("monsoon season :",season);
        break;

    }

// 3. calculate the year.

    let intrestrate , totalintrest;
    let noofyears = +prompt("enter number of year:");
    let principleoftare = +prompt("enter principle rate:");
    
    if( 3 < noofyears <= 5)
    {
        intrestrate = 3;
    }
    else if(5 < noofyears <= 8)
    {
        intrestrate = 5;
    }
    else if(8 < noofyears <= 12)
    {
        intrestrate = 12;
    }
    else
    {
        intrestrate = 15;
    }

    totalintrest = (principleoftare * intrestrate * noofyears)/100;

    console.log("calculate year :",totalintrest);

// 4. check voting eligiablity.

    let age = +prompt("enter your age:");

    if(age >= 18)
    {
        console.log("your eligiable for voting");
    }
    else
    {
        console.log("your not eligiable for voting");
    }

// 5. clasify  age group. 
    
    let group = +prompt("enter age group number:");

    if( group <= 14)
    {
        console.log("child group!!!!!!!!");
    }
    else if(group <= 25)
    {
        console.log("teenager group!!!!!!!");
    }
    else if(group <=50)
    {
        console.log("elder group!!!!!!!");
    }
    else if (group <= 100)
    {
        console.log("senior citizion");
    }