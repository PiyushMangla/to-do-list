const find = document.querySelector('.headsearch input');
const addform = document.querySelector('.addtext');
const list = document.querySelector('.tod');
const items = document.querySelectorAll('.itemlist');
console.log(list.children);

const additem = dot => {
    const html = `
    <li class="itemlist">
                <span class="item">${dot}</span>
                <i class="fa fa-trash delete"></i>
            </li>
    `;
    list.innerHTML += html;
};

// add todo
addform.addEventListener('submit', e => {
    e.preventDefault();
    const dot = addform.add.value.trim();
    if(dot.length){
    additem(dot);
    addform.reset();
    }
})

//delete a todo
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.preventDefault;
        e.target.parentElement.remove();
    }
})


//search a todo

find.addEventListener('keyup', () => {
    const term = find.value;
    filtertod(term);
});
const filtertod = (term) => {

   Array.from(list.children)
        .filter((item) => !item.textContent.includes(term))
        .forEach((item) => item.classList.add("hide"));

    Array.from(items)
        .filter((item) => item.textContent.includes(term))
        .forEach((item) => item.classList.remove("hide"));
};
