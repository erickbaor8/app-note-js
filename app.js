'use strict';

let input = document.querySelector('#inputNote');
let container = document.querySelector('#container-content');
let data = [];
let index = 1;

input.addEventListener('keyup', e => {
    e.preventDefault();

    if (e.key === 'Enter') {
        if (input.value === '') 
            alert("It's empty!!");
        else if (input.value.length < 10)
            alert('You must have at least 10 characters!!');
        else {
            addNote(input.value.trim(), index);

            input.value = '';
            index++;
        }
    } 

});

container.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.classList.contains('flag')) {
        const note = event.target.parentElement;
        deleteNote(note);
    }
});

function drawNote(note) {
    let elem = document.createElement('p');
    elem.className = 'note';
    elem.id = note.id;
    
    if (!note.checked) {
        elem.innerHTML = `<input type="checkbox" id="sel" class="sel"> ${note.description} <span class="flag">x</span>`;
    }

    container.append(elem);
}

function addNote(value, index) {
    const note = { 
        description: value, 
        checked: false,
        id: index
    };

    data.push(note);
    drawNote(note);
}

function deleteNote(note) {
    const id = note.id;
    data = data.filter(note => note.id !== Number(id));
    
    note.remove();
    input.focus();
}