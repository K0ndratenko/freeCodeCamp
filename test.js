// // date 13.12 2022
// //commet
// /* commet*/

// // let user = {
// //    name: 'vova',
// //    age: 43

// // };
// // // console.log(user.rest);
// // console.log(JSON.stringify(user));

// // var a;
// // a = 7;
// // var b;
// // b = a;

// // // Оголошення змінної
// // var studlyCapVar;
// // var properCamelCase;
// // var titleCaseOver;

// // // Призначення змінної
// //  studlyCapVar = 10;
// //  properCamelCase = "A String";
// //  titleCaseOver = 9000;



// // function func(int,int1) {
// //    return int + int1;

// // }



// // console.log(func(1,1));

// // func = 'vova';

// // console.log(func);


// // gen = function() {
// //    var a = 123;
// //    return function() {
// //      return a + 1;
// //    }
// //   }

// //   console.log(gen());
// //   gen.a = 0;
// //   console.log(gen.a)

// //  let User = {
// //    age: 23,
// //    name: 'acab'
// //  }

// // console.log(typeof(User));

// // User = 0;
// // console.log(typeof(User));

// // function f(){
// //    return 1 + 5;
// // }
// // console.log(f());
// // f = 'Byba';
// // console.log(f);



// // const a = () => {
// //    return 5 + 5;
// // }

// // console.log(a());

// // a = 'byba';

// // console.log(a());


// // date 14.12 2022********************************************************************************************************************************

// // let catName = "Oliver";
// // let catSound = "Meow!";


// // console.log(11 % 3);




// // var humanYearsCatYearsDogYears = function(humanYears) {
// //   // Your code here!
// //   let dogYear = 15;
// //   let catYear = 15;
// //   if(humanYears == 2){
// //     dogYear +=9;
// //     catYear+=9;
// //   }else if(humanYears >2){
// //    let caunt = 3;
// //    dogYear +=9;
// //    catYear+=9;
// //    while(humanYears >= caunt){
// //       caunt ++;
// //       dogYear +=5;
// //       catYear +=4;
// //    }
// //   }

// //  console.log(humanYears,catYear,dogYea)
// // }

// // humanYearsCatYearsDogYears(10);


// // const myName = {
// //    MY_NAME: 'Kostia',

// // }


// // myName.MY_NAME = 1;
// // console.log(myName)


// // Налаштування
// // const myArray = [["John", 23], ["dog", 3]];
// // const removedFromMyArray = myArray.shift()
// // Змініть код лише під цим рядком

// // function filter_list(l) {
// //    const listResult = []
// //    for (let i = 0;i<=l.length-1;i++){
// //       console.log('value' + typeof(typeof(l[i])))
// //      if(typeof(l[i]) !== 'string'){
// //          listResult.push(l[i])
// //      }
// //    }
// //    return listResult
// //  }




// //  console.log(filter_list([1,2,'aasf','1','123',123]))


// // const reusableFunction = () => {
// //   console.log('Hi World');
// // }
// // reusableFunction();



// // const reusableFunction = () => {
// //  let oppsGlobal = 100000;
// // }
// // console.log(oppsGlobal)


// // Налаштування
// // const outerWear = "T-Shirt";

// // function myOutfit() {
// //   // Змініть код лише під цим рядком
// // const outerWear = 'sweater';
// //   // Змініть код лише над цим рядком
// //   return outerWear;
// // }

// // console.log(myOutfit())



// // function f (num) { 
// //   let n = Math.pow(num,2);
// //   return n
// //  }
// //  console.log(f(3))

// //  let myArr = new Array();


// // function isIsogram(str){
// //   let check = false;
// //   let count = 0;
// //   const arr = []
// //   for (let i =0 ;i< str.length;i++){
// //     arr.push(str[i])
// //   }

// //   for(let i = 0;i< str.length;i++){
// //     for(let j =0 ; j < str.length;j++){
// //       if(str[i] === arr[j] && check === false){
// //           check = true    
// //       } else if (str[i] === arr[j] && check === true){
// //           throw new Error('В слове есть одинаковая буква')
// //       }


// //   }


// //   }
// // }
// // isIsogram('')
// //while( count < myArr.length )

// // function removeExclamationMarks(s) {
// //   const myArr = []

// //   for(let i =0 ;i< s.length;i++){
// //     myArr[i] = s[i]
// //   }

// //   let count = 0;
// //   for(let i =0 ;i< s.length;i++){
// //       if(myArr[count] === '!' ){
// //           myArr.splice(count,1)
// //       }

// //     count++;
// //   }

// //   return myArr.join('', ' ');
// // }

// //   console.log(removeExclamationMarks('Hello world!'))


// // let georgy = {
// //   name: 'Georgy',
// //   age: 23
// // }

// // let {name,age} = georgy

// // georgy = 5;

// // console.log(name,age)
// // console.log(georgy)





// // function myfun ({aaa,bbb}){
// //       if(aaa>30){
// //         aaa += 100500;
// //         console.log(`Возраст больше 30`)
// //         console.log(`age = ${aaa}`)
// // //         return
// // //       }
// // //       console.log(`aaa eto > ${aaa}`)
// // //         console.log(`возвраст меньше 30 `)

// // // }

// // // myfun(Student)
// // // console.log(Student.age)






// // // const Student = {
// // //   name: 'Maksim',
// // //   age: 50,
// // //   lastName: 'Koala'
// // // }

// // // for(k in Student){
// // //   Student[k] += ' Mawa))))'
// // //   console.log(`k = ${k}                         значение = ${Student[k]}`)
// // // }



// // // console.log(Student)
// // let result = ''
// // const str = 'Manemanemane'
// // for (let l in str ){
// //   console.log(result +=(str[l]+='!'),l)
// // }

// // console.log(str)
// // console.log(result)




// // function testLogicalAnd(val) {
// //   // Змініть код лише під цим рядком

// //   if (val<=50 && val >=25) {
// //       return "Yes";

// //   }

// //   // Змініть код лише над цим рядком
// //   return "No";
// // }

// // testLogicalAnd(10);





// // const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// // function golfScore(par, strokes) {
// //   // Only change code below this line
// //   if (strokes == 1) {
// //     return names[0];
// //   } else if (strokes <= par - 2) {
// //     return names[1];
// //   } else if (strokes === par - 1) {
// //     return names[2];
// //   } else if (strokes === par) {
// //     return names[3];
// //   } else if (strokes === par + 1) {
// //     return names[4];
// //   } else if (strokes === par + 2) {
// //     return names[5];
// //   } else {
// //     return names[6];
// //   }
// //   // Only change code above this line
// // }




// // function caseInSwitch(val) {
// //   let answer = "";

// //   // Змініть код лише під цим рядком
// //   switch (val) {
// //     case 1: answer = alpha
// //       break;
// //     case 2: answer = beta
// //       break;
// //     case 3: answer = gamma
// //       break;
// //     case 4: answer = delta
// //       break;

// //   }


// //   // Змініть код лише над цим рядком
// //   return answer;
// // }

// // caseInSwitch(1);
// // let result = 0;
// // var min = function(list){
   
// //   list.forEach((element,index) => {
// //       if(element < result){
// //         result = list[index]
// //       }
    
// //   });
// //     return result;
// // }

// // var max = function(list){
    
  
// //   list.forEach((element,index) => {
// //       if(element > result){
// //         result = list[index]
// //       }
    
// //   });
// //     return result;
// // }


// // console.log(min([5]))
// // console.log(max([5]))






// function sequentialSizes(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
// switch(val){
//   case 1:
//   case 2:
//   case 3:
//     answer = 'Low'
//     break;
//     case 4:
//     case 5:
//     case 6:
//     answer = 'Mid'
//     break;
//       case 7:
//       case 8:
//       case 9:
//       answer = 'High'
//       break;


// }


//   // Змініть код лише над цим рядком
//   return answer;
// }

// sequentialSizes(1);





// let count = 0;

// function cc(card) {
  // Змініть код лише під цим рядком
// switch(card){
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     count +=1;
//     break;
//   case 10:
//   case 'J':
//   case 'Q':
//   case 'K':
//   case 'A':
//    count -= 1;
//    break
// }

//   return `${count} ${(count>0)? 'Hold' : 'Bet'}`;
//   // Змініть код лише над цим рядком
// }
// console.log(cc(2))
// console.log(cc(3))
// console.log(cc(4))
// console.log(cc(5))
// console.log(cc(6))
// //cc(2); cc(3); cc(7); cc('K'); cc('A');





// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs.Hunter;
// console.log(myBreed);


// function checkObj(obj, checkProp) {
//   let result = obj.hasOwnProperty(checkProp);
//  return (result) ? obj[checkProp] : "Not Found"
 
 
 
 
 
  // return "Change Me!";
  // Змініть код лише над цим рядком
// }

//  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))





// // Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if(prop !== 'tracks' && Boolean(value)){
//     records.id.prop = value
//   }else if(proo === 'tracks' && records.tracks === undefined){
//     records.id.arr = value
//   }

  
  
  
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// const myArray = [];
// let count = 1
// for(let i =0;i <=5;i++){
//   myArray[i] = count
//   count++;
// }

// console.log(myArray)


// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     product *= arr[i][j]
//   }
// }
//   // Змініть код лише над цим рядком
//   return product;
// }

// let res = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// console.log(res)




// function sum(arr, n) {

//   if(n<=0){
//       return 0;
//   }
//   return sum(arr, n - 1) + arr[n - 1];




// }

// console.log(sum([2, 3, 4, 5], 3))











// Date.prototype.getDate = function getGrinchDate() {
//   let  arrDate=  this.toString().split(" ")
// console.log(arrDate)
//     if(arrDate[1] == "Dec" && arrDate[2] == '25'){
//       return 26
//     }else {
//       return Number(arrDate[2])+1
//     }      

  
// }


// const d = new Date('1957-12-25');
// console.log(d.getDate())
// console.log(d.getMonth())






// function makeClass(...properties) {
//   let arg = properties
//  // console.log(arg[0])
//   class Animal{
//     constructor(arg){
//   this.name = properties[0];
//   this.species = properties[1];
//   this.age = properties[2];
//   this.health = properties[3];
//   this.weight = properties[4];
//   this.color = properties[5];

//     }
//   }
//  let newClass = new Animal(this.name,this.species,this.age,this.health,this.weight,this.color)
//   return newClass
// }


// let test = makeClass('Bob','Dog','5','good','50lb','brown')
// console.log(test)

// class Animal {
//   constructor(name,species,age,health,weight,color){
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
//   }
// }
// let test1 = new Animal('Bob','Dog','5','good','50lb','brown')
// console.log(test1)



// function makeClass(){
//   return  class Animal{
//         constructor(name,species,age,health,weight,color){
//           this.name = name;
//           this.species = species;
//           this.age = age;
//           this.health = health;
//           this.weight = weight;
// //           this.color = color;
// //         }
// //   }
// // }
// // //"name":250.86272431983824,"species":51.38450741281986
// // let t = makeClass()
// // console.log(t)
// //  let t2 = new t(250.86272431983824,51.38450741281986)
// //  console.log(t2)



//  function makeClass(...properties) {
//   return class {
//     constructor(...props) {
//       properties.forEach((prop, index) => {
//         this[prop] = props[index]
//       })
//     }
//   }
// }

// const Animal = makeClass("name","species","age","health","weight","color") 
// console.log(new Animal('Bob','Dog','5','good','50lb','brown'))

// class Shark extends Animal {
//   constructor(name, age, status, legs = 0, species = "shark") {
//     super(name, age, legs, species, status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status, legs = 4, species = "cat") {
//     super(name, age, legs, species, status);
//   }
  
//   introduce() {
//     return super.introduce() + '  Meow meow!';
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master, legs = 4, species = "dog") {
//     super(name, age, legs, species, status);
//     this.master = master;
//   }
  
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
//}




// class Student {

//   constructor(){
//       this.name =  'Lewa'
//       this.age = 25
//   }
// }


// class Employee{
//   constructor(){
//     this.name =  'employee'
//     this.age = 0
//   }
// }

// Student.prototype.sayHello = function() {
//   console.log('hello')
// }

// let employee = new Employee()

// console.log(employee.sayHello())


// let st1 = new Student()
// //console.log(st1)


// let str = new String('ooooooooooooooooooooo')

// str.kakabyby = 'ssddff'
// console.log(str)



let a = (function(){console.log('tyta')})();
console.log(a)