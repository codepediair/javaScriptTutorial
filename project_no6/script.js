const toggle = document.getElementById('toggle'),
     close = document.getElementById('close'),
     open = document.getElementById('open'),
     modal = document.getElementById('modal');


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

open.addEventListener('click', () => modal.classList.add('show-modal'));


close.addEventListener('click', () => modal.classList.remove('show-modal'));


window.addEventListener('click', e => 
    e.target == modal ? modal.classList.remove('show-modal'): false
);