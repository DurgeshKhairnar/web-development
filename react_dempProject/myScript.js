
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


const arr = [1,2,3,2,3,2];

let count = 0;
for(let i = 0; i < arr.length; i++){
    
    for(let j =  i + 1; j < arr.length ; j++){
        if(arr[i] == arr[j]){
            count++;
        }
         
    }
}
console.log(count)










