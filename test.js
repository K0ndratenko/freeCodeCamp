// date 13.12 2022
//commet
/* commet*/

// let user = {
//    name: 'vova',
//    age: 43

// };
// // console.log(user.rest);
// console.log(JSON.stringify(user));

// var a;
// a = 7;
// var b;
// b = a;

// // Оголошення змінної
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// // Призначення змінної
//  studlyCapVar = 10;
//  properCamelCase = "A String";
//  titleCaseOver = 9000;



// function func(int,int1) {
//    return int + int1;

// }



// console.log(func(1,1));

// func = 'vova';

// console.log(func);


// gen = function() {
//    var a = 123;
//    return function() {
//      return a + 1;
//    }
//   }

//   console.log(gen());
//   gen.a = 0;
//   console.log(gen.a)

//  let User = {
//    age: 23,
//    name: 'acab'
//  }

// console.log(typeof(User));

// User = 0;
// console.log(typeof(User));

// function f(){
//    return 1 + 5;
// }
// console.log(f());
// f = 'Byba';
// console.log(f);



// const a = () => {
//    return 5 + 5;
// }

// console.log(a());

// a = 'byba';

// console.log(a());


// date 14.12 2022********************************************************************************************************************************

// let catName = "Oliver";
// let catSound = "Meow!";


// console.log(11 % 3);




// var humanYearsCatYearsDogYears = function(humanYears) {
//   // Your code here!
//   let dogYear = 15;
//   let catYear = 15;
//   if(humanYears == 2){
//     dogYear +=9;
//     catYear+=9;
//   }else if(humanYears >2){
//    let caunt = 3;
//    dogYear +=9;
//    catYear+=9;
//    while(humanYears >= caunt){
//       caunt ++;
//       dogYear +=5;
//       catYear +=4;
//    }
//   }

//  console.log(humanYears,catYear,dogYea)
// }

// humanYearsCatYearsDogYears(10);


// const myName = {
//    MY_NAME: 'Kostia',

// }


// myName.MY_NAME = 1;
// console.log(myName)


// Налаштування
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift()
// Змініть код лише під цим рядком

function filter_list(l) {
   const listResult = []
   for (let i = 0;i<=l.length-1;i++){
      console.log('value' + typeof(typeof(l[i])))
     if(typeof(l[i]) !== 'string'){
         listResult.push(l[i])
     }
   }
   return listResult
 }




 console.log(filter_list([1,2,'aasf','1','123',123]))