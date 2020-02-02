'use strict';

let input = document.querySelector('#inputNote');
let container = document.querySelector('#container-content');
let checkbox = document.querySelector('#sel');
let data = [];

input.addEventListener('keyup', e => {
    e.preventDefault();

    if (e.key === 'Enter') {
        if (input.value === '') 
            alert("It's empty!!");
        else if (input.value.length < 10)
            alert('You must have at least 10 characters!!');
        else {
            const note = { description: input.value, status: false };
            data.push(note);
            input.value = '';
        }
    } 

});