
//  let user1 = {
//     name:"Durgesh",
//     greet:function(){
//         console.log(this.name)
//     }
//  }

//   let user2 = {
//     name:"sai",
//     nam2:user1.name,
//     greet:user1.greet
//  }

// user1.greet()
// user2.greet()

// function test() {
//   console.log(this);
// }

// test();


// let obj = {
//     name : "durgesh",
//     greet : ()  => {
//         console.log(this)
//     }
// }

// obj.greet();


// const user = {
//     name: "Durgesh",

//     normalFunction: function () {
//         let name = "sai"
//         console.log(name);

//         const arrowFunction = () => {
//             console.log(this.name);
//         };

//         arrowFunction();
//     }
// };

// user.normalFunction();





// const user = {
//     name: "Durgesh",

//     normalFunction: function () {
//         console.log(this.name);

//         const arrowFunction = () => {
//             console.log(this.name);

//             const arrFun = () => {
//                  console.log(this.name);
//             }
//             arrFun()
//         };

//         arrowFunction();
//     }
// };

// user.normalFunction();


// {
//   var x = 10;   
// }

// console.log(x);


// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// let pass = '';

// for(let i = 1; i < 17; i++){
//   const num = Math.floor(Math.random() * str.length);
//   pass += str.charAt(num)
// }

// console.log(pass);


// const arr = [1,2,3,2,3,2];

// let count = 0;
// for(let i = 0; i < arr.length; i++){
    
//     for(let j =  i + 1; j < arr.length ; j++){
//         if(arr[i] == arr[j]){
//             count++;
//         }
         
//     }
// }
// console.log(count)



// let name = 'durgesh';
// console.log(name.length)
// for(let i = name.length - 1; i >= 0; i--){
//     console.log(name[i]);
// }


// let num = 5;

// if( num % 2 == 1 ||num == 2 ){
//     console.log('is prime number')
// }


// let num = 121;
// let reminder = 0;
// let palindromNumber = 0;

// while(num > 0){
//     let reminder = Math.floor(num) % 10;
//     palindromNumber = palindromNumber * 10 + reminder;
//     num = Math.floor(num / 10);
// }

// console.log(palindromNumber);


// let palindromString = 'SOS';
// let demoString = ''

// for(let i = palindromString.length - 1; i >= 0; i--){
//         demoString += palindromString[i];
// }

// console.log(demoString === demoString)


// let arr = [ 1 , 4 , 2 , 3 , 8 , 5];
// let temp = 0;

// for(let i = 0; i < arr.length; i++ ){
//     if(temp < arr[i]){
//         temp = arr[i];
//     }
// }

// console.log(temp)



let arr = [ 1 , 4 , 2 , 3 , 8 , 6 , 5];
let largest = 0;
let secondeLargest = 0;

for(let i = 0; i < arr.length; i++ ){
    if(largest < arr[i]){
         secondeLargest = largest
        largest = arr[i];
    }
    if(largest < arr[i] && arr[i] !== largest){
        secondeLargest = arr[i];   
    }
}

console.log(largest)
console.log(secondeLargest)

