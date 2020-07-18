 const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// arrow function = the syntax (varname.addEventListener('event', (eventparameter) => {whatever u wanna do})
myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields'; 

        setTimeout(() => msg.remove(), 3000);
    }   else {
        let summary = `welcome ${nameInput.value}`;
            console.log(summary);
        
        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // userList.appendChild(li);

        // // clear fields
        // nameInput.value = '';
        // emailInput.value= '';
        
    }

});
 

//  or

//  regular function without arrow function
myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault()


    // then my conditionals
    
}

 

 