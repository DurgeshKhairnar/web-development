
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


function test(){
    let x = 10;
    // console.log(x);
}
console.log(x)



test()

