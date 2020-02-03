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

    if (event.target.classList.contains('note')) {
        const note = event.target;
        completed(note);
    }
});

function drawNote(note) {
    let elem = document.createElement('p');
    elem.className = 'note';
    elem.id = note.id;
    
    if (!note.checked) {
        elem.innerHTML = `${note.description} <span class="flag">x</span>`;
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

function completed(note) {
    const idx = data.findIndex(item => item.id === Number(note.id));
    data[idx].checked = !data[idx].checked;

    if (data[idx].checked) {
        note.classList.add('done');
        note.firstElementChild.checked = true;
    } else {
        note.classList.remove('done');
        note.firstElementChild.checked = false;
    }

    input.focus();
}