// console.log('hello word') 

//function cat(){
  //  alert('welcome to gomycode')
   // prompt('how old are you')
   // confirm('Are you sure')
//}


//date type
//Number
// let age = 10
// console.log(age)

// //String
// let name='james'
// console.log(name)

// //Boolean
// let isDone=true
// console.log(isDone)

// //Nill
// let database = null
// console.log(database)


// //Undefiend
// let password;
// console.log(password )
//var

//let age=10
//age=20
//console.log(age)


//const age=20
//console.log(age)




//let x=11
//let y=4
//console.log(x + y);
//console.log(x - y);
//console.log(x / y);
//console.log(x * y);
//console.log(x % y);

//modulus 
//console.log(x ** y);

// decrement
//let nums= 5
//nums--
//console.log(nums);

//increment
//let num =5
//num++
//console.log(num);


//let school = 'Gomycode'
//console.log(school)


//let Y = 10
//let v = 3

//y += v

//console.log(y);



// let y= 10
// let v = 7
// y %= v
// //console.log(y);



// let school='Gomycode'
// let address= '230 herbert macauley way'

//let gomycodeAddress = 'the + school + heckerpspace is at ' + address
//let gomycodeAddress = `the ${school} hackerspace is at ${address}`
//console.log(gomycodeAddress);

//function addme(a, b, c,){
     //  return a + b - c 
//}
//console.log(addme(5, 7, 3,));


// function cat(){
//        let number = prompt('Insert a number')

//        if(number <= 40){
//               alert(`you failed the test`)
//        }
//        else if(number > 40 && number <=60){
//               alert(`you passed the test`)
//        }
//        else if (number > 60 && number <= 100){
//               alert(`you eced the test`)
//        }
//        else{
//               alert(`you did not write the test`)
//        }
// }


//let x=10

//if(x < 10){
  //     console.log('this number is lesser than ten')
//}

//else if(x >= 10){
  
  //     console.log('this number is grateter than ten')
//}


//else if(x > 10 && x > 20){

  //     console.log('this number is greater than ten 10 and lesser than 20')
//}


//else{
  //     console.log('this number is  not lesser than ten')
//}



// function color(col){
//        switch(col) {
//               case 1: console.log('Red')
//               break;
//               case 'java': console.log('Blue')
//               break;
//               case 3: console.log('Grey')
//               break;
//               case 'go': console.log('Lemon')
//               break;
//               default: console.log('color not found')
//        }
// }
// color('java')



// let numbers=[19, 65, 1, 2, 6, 1, 9, 9, 2, 1];

// let sum=0;
// let i = 0;
// while (i < numbers.length) {
//        sum += numbers[i];
//        i += 1;
//        console.log(i)
// }
// console.log( 'the loop was executed ' + i + 'times');



//do vale

// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];

// let sum = 0;
// let i = 0;
// do{
//   sum +=numbers[i];
//   i += 1;
//   console.log(sum)
// }
// while (i > numbers.length) {
// console.log( 'the loop was executed ' + i + 'times');
// console.log(sum);
// }





// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;




// function gomy(){
//   let name = prompt('Insert you name')

//   if(name === 'matthew'){
//     alert('you can access the page');
//   }
//   else if (name === 'john'){
//     alert('you need to sign in ');
//   }
//   else{
//     alert('you need to register');
//   }
//}



//factorise
// exp: 5! = 1*2*3*4**5=120
// function factorise( num){
//   let product = 1;
//   for (let i= 1 ; i <=num; i++){
//       product *=i;
//      console.log(product)
//   }
//   console.log(product)
//  }
//  factorise(7)




// function multiplicationtable( number){
//   for (let i= 1; i <=12; i++){
//     let result = number * i;
//     console.log(`${number}x ${i} =${result}`);
//   }
// }
// multiplicationtable(2)
//  TN: 2X1.. 2X2..  2X3..2X4......




// function correct(){
//   alert(`correct answer`)
// }

// function correct(){
//   alert(`fail answer`)
// }


// function checkAns(){
//   let ans = prompt('correct an answer')
//   switch(ans){
//     case 'b': correct();
//     break;
//     case 'a': fail()
//     break;
//     default: alert('select answer')
//   }
//}



//loops:

// let number = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1 ];
// let sum = 4;

// for (let i in number){
//   if( i % 2 == 50) {
//     break;
//   }
// }
// console.log(sum);

// for(var i in number){
//   sum += number [i];
//   if (sum >= 100){
//     break;
//   }
// }
// console.log(sum);


// Topic: Array

// let date =10;
// let colours = ["black", "white", "red", "green", 10, 2, null, date, true]
// console.log(colours);              //TN: we can all as many values  in d array

//Exp 2:

// let colours = ["black", "white", "red", "green"]
// console.log(colours);                     // TN: it show us all d name of d colour we have 

//Exp 3:

// let colours = ["black", "white", "red", "green" ]
// console.log(colours.length);                // TN : shaow us the number of all d colour we have

//Exp 4:

// let colours = ["black", "white", "red", "green", ]
// console.log(colours [0]);
// console.log(colours [1]);                       //TN: all is call Index it start counting from zero 0
// console.log(colours [2]);
// console.log(colours [3]);


//  METHOD IN ARRAY  U NEED TO KNOW: POP (), PUSH (), SHIFT (), UNSHIFT (),

//Exp 5:

// let colours = ["black", "white", "red", "green", ]
// console.log(colours [0]);
// console.log(colours [1]);
// console.log(colours [2]);
// console.log(colours [3]);

// console.log(colours.length);         //TN: it tell us the number of d colours we have 
// colours.pop();
// console.log(colours);

//Exp 6:

// let colours = ["black", "white", "red", "green", ]
// console.log(colours [0]);
// console.log(colours [1]);
// console.log(colours [2]);
// console.log(colours [3]);

//  console.log(colours.length);
//  colours.pop();
// colours.push('yellow');             //TN: it help to add other values to the colour
// console.log(colours);



//Exp 7:

// let colours = ["black", "white", "red", "green", ]
// console.log(colours [0]);
// console.log(colours [1]);
// console.log(colours [2]);
// console.log(colours [3]);

//  console.log(colours.length);
//  colours.pop();
// colours.push('yellow');
//  colours.shift()            // TN: it will remove from the first colour ANS: black will go off

// console.log(colours);




//Exp :8

// let colours = ["black", "white", "red", "green", ]
// console.log(colours [0]);
// console.log(colours [1]);
// console.log(colours [2]);
// console.log(colours [3]);

//  console.log(colours.length);
//  colours.pop();
// colours.push('yellow');
// colours.shift()
// colours.unshift('white')              //TN: it just to remove for the front  OR if u add  a value to d UNSHIFT('') it removes from d front and add d new value or name to it. 

// console.log(colours);




// Object: stor multiple data in key value pairs.

// let person = {
//   name: 'mathias',
//   age: 27,
//   student: true,
//   phone: null,
// }
// console.log(person.age) 
// console.log(person.student)                     // TN: it help to stor multiple data in need. and if u want to run it all 
//                                                         // u have to do is to  cons9ole.log() u have to put  d suject. values some thing like this
                                                        //  console.log(person.name).













         //MY HOME-WORK 

// switch :is a statement that evaluates a value/ expression matches the
//        value to many case clauses more efficient that may "else if" statement.
  //  Exp:

  // let grade="A"

  // switch(grade){
  //   case "A":
  //   console.log("you did great!");
  //   break;                                                                          // // TN: break help the element to break from stage to stage.

  //   case "B":
  //   console.log("you did good!");
  //   break;


  //   case "C":
  //   console.log("you did  okay!");
  //   break;

  //   case "D":
  //   console.log("you...did not do that well!");
  //   break;

  //   case "F":
  //   console.log("YOU FAILED!");
  //   break;


  //   default:
  //     console.log(grade, "is not a letter grade!")
  // }









// IF Statement= a basic form of decision making if a condition is 
//               true, that do somthing if not, then don't do it!
                  // u can used == or <= or >= 

// let age =65;

// if(age == 18){
// console.log("you are an aduit");
// }
// else if(age ==65){
//   console.log("you are senior");
// }

// else{
//   console.log("you are a chlid");
// }

// Exp: 2

// let age =18;

// if(age >= 18){
// console.log("you are an aduit");
// }
// else if(age >= 65){
//   console.log("you are senior");
// }

// else if(age >= 65){
//   console.log("you are a man");
// }

// else{
//   console.log("you are a chlid");
// }


// Exp: 3

// let age =100;

// if(age <= 18){
// console.log("you are an aduit");
// }
// else if(age <= 65){
//   console.log("you are senior");
// }

// else if(age <= 34){
//   console.log("you are a man");
// }

// else{
//   console.log("you are older then what we went");
// }




  //  Array =a special variable, that can hold more than one value 

  //           Each "space" is known as an element  

  //           you  access element in an array by referring to the index number ex.[o]
     
  //       TN: Array Method:push ("!");  add an element 
  //           pop ();  removes last element 
  //           let numberofcars= cars.length; returns length of array 
  //           sort (); sorts an array alphabetically /number
  //           reverse (); reverse sort  an array
  //           let lastcar=cars [cars.length-1];


        // Exp 1

        // let cars = ["mustang","corvette","jaguar",]
        //   console.log(cars);


        //Exp 2:
// if u want to know what number of the cars u name  4under or u just want to
   //list them.  TN:= u number start counting from [0] zero and it call index

  //  let cars = ["mustang","corvette","jaguar",]
  //         console.log(cars[0]);
  //         console.log(cars[1]);                   // TN: it will show all d cars u have. by runing it with  
  //         console.log(cars[2]);                         // console.log(car[3]); that d values[number]



// Exp 3:
// if u want to add other method to the array used PUSH ("") 

// let cars = ["mustang","corvette","jaguar",]
//        console.log(cars[0]);
//        console.log(cars[1]);                    
//        console.log(cars[2]);

//        cars.push ("toyota","bancel");
//        console.log(cars[3]);
//        console.log(cars[4]);                            // u can add as many as u want to d valeus or to push
//                                                           //if u want to add another values,  just  the name of d object.push ("add d name u want ")
//                                                           // cars.push('toyota');
                                                             // console.log(cars[3]);





// Exp 4:
// if u want to remove and element from the array u well used pop();

// let cars = ["mustang","corvette","jaguar",]
//        console.log(cars[0]);
//        console.log(cars[1]);                    
//        console.log(cars[2]);

//        cars.push ("toyota","bancel");

//       cars.pop();                                            // TN: it will remove d lest element in d values 
//                                                                    // and if u want to keep removing just keep puting 
//        console.log(cars[3]);                                           //cars.pop();
//        console.log(cars[4]);                            
      
   


//Exp 5: 

//length = shouw us the total number of the element we have in d array

// let cars = ["mustang","corvette","jaguar",]
//        console.log(cars[0]);
//        console.log(cars[1]);                    
//        console.log(cars[2]);

//        cars.push ("toyota","bancel");

//       cars.pop();

//       let numberofcars= cars.length; 
//       //                                                TN: it tell us d total number of d element in d Array
//       //                                                    by useding let numberofcars=car.length          
//         console.log(cars[3]);                               // console.log(numberofcars);             
//        console.log(cars[4]); 
//        console.log(numberofcars); 



  // Exp 6:
  //  sorts an array alphabetically / number

  //  let cars = ["mustang","corvette","jaguar",]
  //  console.log(cars[0]);
  //  console.log(cars[1]);                    
  //   console.log(cars[2]);

  //   cars.push ("toyota","bancel");

  //  cars.pop();

  //  let numberofcars= cars.length; 

  //  cars=cars.sort();                                 //TN : it sorts the element alphabetically in Array. reneber to 
                                                                //remeber to run it with colnsole.log(cars);
  //   console.log(cars);                                      
  //   console.log(cars[3]);                                           
  //   console.log(cars[4]); 
  //   console.log(numberofcars); 





  //Exp 7:

  //reverse sort an array

//   let cars = ["mustang","corvette","jaguar",]
//   console.log(cars[0]);
//    console.log(cars[1]);                    
//    console.log(cars[2]);

//    cars.push ("toyota","bancel");

//   cars.pop();

//   let numberofcars= cars.length; 

//   cars=cars.sort();                                            TN: it help to reverse element in the array
                                                                      // remeber to run it with console.log(cars)
//   
                                             
//    console.log(cars)                                                         
//    console.log(cars[3]);                                           
//    console.log(cars[4]); 
//    console.log(numberofcars)



//Exp 8:

//to know the lacars= cars.reverse();st name in the element in array



// let cars = ["mustang","corvette","jaguar",]
// console.log(cars[0]);
// console.log(cars[1]);                    
// console.log(cars[2]);

//  cars.push ("toyota","bancel");

// cars.pop();

// let numberofcars= cars.length; 

// cars=cars.sort();                                 
                                           
// cars= cars.reverse();

// let lastcars=cars[cars.length -1];                               // TN: it shows the last element in d array and run it with
//                                                                          //console.log(lastcars);
// ;console.log(lastcars)
// console.log(cars);
// console.log(cars[3]);                                           
// console.log(cars[4]); 
// console.log(numberofcars)

  




// Object: stor multiple data in key value pairs.

// let person = {
//   name: 'mathias',
//   age: 27,
//   student: true,
//   phone: 08180022626,
// }
// console.log(person.age);
// console.log(person.student);
// console.log(person.phone);                     // TN: it help to stor multiple data in need. and if u want to run it all 
//                                                         // u have to do is to  cons9ole.log() u have to put  d suject. values some thing like this
                                                         //console.log(person.name).

 


   //function
     // function is a block of code designed to perform a particular action task / procedure. (subroutine)

         //  we invoke "call" whenever we want it do something we need to define what we want task to do.

         //Exp 1
//  function sayhello(){
//   console.log("hello");
//  }
//   sayhello();                          // TN: with out useding de function element to run it i will not run. so we used sayhello();


//Exp 2
// function sayhello(){
//   console.log("hello");
//  }
//   sayhello(); 
//   sayhello();
//   sayhello();                                // TN: U can give ur function many timmes. it will show ur answer 5 times.
//   sayhello();
//   sayhello();  


//Exp 3

//  function sayhello(){
//   console.log('hello');
//   console.log("have a nice day!")
//   console.log("goodbye");                           // if u do sayhello(); 5 times it will show ur answer 5  times.  as many u put.
//  }
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// sayhello();
// sayhello();

 //Exp 4:
 
//  function sayhello(){
//    console.log('hello', myname,"im older then u i am ",age);
//   }
//   let myname = "mathias";
//   let age="34"                                    //TN: is telling us it can colet many function.
//  sayhello();


//Exp 5:

// function sayhello(myname,myage){
//   console.log('hello', myname,);
//   console.log(myname, "you are",myage,"years old");
// }                                                                 //  TN: u can add many element to the function.
// let myname ="mathias";
// sayhello("mathias", 21);


//Exp 6:

// function tocelsius(f){
//   return (f-50)*(5/25);
// };                                                          // TN: it help to calculate and return d valule back.
// let myTemp = tocelsius(200);
// console.log("my temp in c is", myTemp,"degrees");


//Exp 7:
// function tocelsius(f){
//   return (f-50)*(5/25);
// };
// function tofarenheit (c){                        TN: the answer is : my temp in f is 99.86 degrees.
//   return(c * 9/5) + 32;
// };

// let myTemp = tofarenheit(37.7);
// console.log("my temp in f is", myTemp,"degrees");




//loop: 
 //for loop =repeat a loop a limited amount of time  for 
//           (declare index; condition; step )

//                                                //TN: i= is a shot form of index. index start counting from zero.
                                                  //    like if u have 1-10 now it will start counting from zero 0-9. 
                                                  //     index start counting from zero to the end.
                                                  // TN i++ = is to keep adding one (1) to the counting like 2+1=3,     
                                                  //           3+1=4 and so on. 
// exp 1
//  for (let i =0; i< 10; i++){
//    console.log(i);                               // ans: 0-9
//  }


// exp 2:
   // if u want to count from 1-10.
  //  for (let i =1; i<=100; i++){
  //      console.log(i);                               // ans: it will start counting from 1 to 100.  
  //    }


  // exp 3:
   // if u want to count in eve- number or in 2(two), 3(three) and so on.
  //  for (let i =1; i<=10; i+=2){
  //   console.log(i);                               // ans:  it will keep countimg the number u put out and put the nest.
  //                                                 //        the ans is 1,6,11,16, thatin 5. let say in 2 twos:1,3,5,7,9.
  // }                                           //TN: all u have to do it to just keep changing i+=2 just kepp changing 
                                              //     number to the right one u want.


// Exp 4:
 // how to count down, at say we are counting down the second to the new year.
 // from the top to down  10 - 0 and say happy new year.
//  for (let i =10; i >0; i--){
//   console.log(i);                               // ans: it will count down from 10-1. happy new year.
// } 
// console.log("Happy New Year"); 
//            OR 
//  let i=10;
//  for (;i >0; i--){
//  console.log(i);                               // ans: it will count down from 10-1. happy new year.
// }                                              // TN: we can also do it this way.
//  console.log("Happy New Year"); 
//              OR
let i=10;
  for (;i >0;){
  console.log(i);
  i--;                                           // ans: it will count down from 10-1. happy new year.
 }                                              // TN: we can also do it this way.
  console.log("Happy New Year"); 
              











 




















































