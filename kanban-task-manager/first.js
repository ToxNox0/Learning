const columns= document.querySelectorAll('.content');

columns.forEach((column) => {
    const todoInput= column.querySelector('.toDoInput');
const todoBtn= column.querySelector('.addToDo');
const list= column.querySelector('.toDoList');

// everything starts after the pressing the button
todoBtn.addEventListener('click', () => {


    // first task is to trim the input for first and last spaces
    const taskText= todoInput.value.trim();


    // then it checks if the entry is empty
    if (taskText=== '') {
        alert("Enter a task first"); //if it is then it exits the button
        return;
    }


    // these lines are executed if the entry are actual task
    // now we make the new list items
    const newLi = document.createElement('li');
    const label= document.createElement('label');

    const checkbox= document.createElement('input');
    checkbox.type= 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;


    // now we add them together
    label.appendChild(checkbox);
    label.appendChild(span);
    newLi.appendChild(label);

    // now we add the block to the main code
    list.appendChild(newLi);

    // clearing the input for new input
    todoInput.value= '';

});
});

