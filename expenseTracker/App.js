inputs = document.querySelectorAll('input');
addButton = document.querySelector('button');
const table = document.querySelector('table');


function addExpense() {
   const expenseObject = {
       name:inputs[0].value,
       date:inputs[1].value,
       amount:inputs[2].value
    }
    const tr = document.createElement('tr');
    const removeButton = `<button class="remove-button">remove</button>`;
    tr.innerHTML = `<td>${expenseObject.name}</td> <td>${expenseObject.date}</td> <td>${expenseObject.amount}</td><td>${removeButton}</td>`;
    table.appendChild(tr);

}

function handleRemoving(e) {
    if (e.target.classList.contains('remove-button')) {
        const td = e.target.parentNode;
        td.parentNode.remove();
       
    }
}

addButton.addEventListener('click', addExpense);
document.addEventListener('click', handleRemoving);