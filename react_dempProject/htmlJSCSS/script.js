// let email = document.querySelector(".email");
// let password = document.querySelector(".password");
// let emailError = document.querySelector(".emailError");
// let form = document.querySelector("form");


// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailRegex.test(email.value)){
//         console.log("email is not valid")
//         emailError.style.display = "initial"
//         emailError.textContent = "email is not valid"
//     }else{
//         console.log("email is valid")
//         emailError.style.display = "none"
//     }
// })

let inputs = document.querySelectorAll('input')
let form = document.querySelector("form");

let main = document.querySelector('.main')

// let infoContainer = document.createElement("div");
// infoContainer.classList.add('info-container')

// let imageContainer = document.createElement("div");
// imageContainer.classList.add('image-container');

// let img = document.createElement('img');
// img.setAttribute("src",inputs[0].value);

// let h3 = document.createElement('h3');
// h3.textContent = inputs[1].value;

// let h5 = document.createElement('h5');
// h5.textContent = inputs[2].value;

// let p = document.createElement('p');
// p.textContent = inputs[3].value;

// imageContainer.appendChild(img);
// infoContainer.appendChild(imageContainer);

// infoContainer.appendChild(h3);
// infoContainer.appendChild(h5);
// infoContainer.appendChild(p);

// main.appendChild(infoContainer);


form.addEventListener('submit',function(e){
    e.preventDefault();
   
let infoContainer = document.createElement("div");
infoContainer.classList.add('info-container')

let imageContainer = document.createElement("div");
imageContainer.classList.add('image-container');

let img = document.createElement('img');
img.setAttribute("src",inputs[0].value);

let h3 = document.createElement('h3');
h3.textContent = inputs[1].value;

let h5 = document.createElement('h5');
h5.textContent = inputs[2].value;

let p = document.createElement('p');
p.textContent = inputs[3].value;

imageContainer.appendChild(img);
infoContainer.appendChild(imageContainer);

infoContainer.appendChild(h3);
infoContainer.appendChild(h5);
infoContainer.appendChild(p);

main.appendChild(infoContainer);

    inputs.forEach(function(inp){
        inp.value = "";
    })
})


