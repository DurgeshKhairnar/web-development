

// let main = document.createElement('main')
// let div = document.createElement('div');
// div.classList.add('outerDiv');
// div.style.backgroundColor = 'red';
// div.style.height = '500px';
// div.style.width = '500px';
// main.appendChild(div);
// document.body.appendChild(main);


let input = document.querySelector('input');
let submit = document.querySelector('button');
let h3 = document.querySelector('h3')

submit.addEventListener('click',() => {
    h3.textContent = input.value;
    input.value = '';
})

