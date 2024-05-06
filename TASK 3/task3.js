let todoItemsContainerEl = document.getElementById("todoItemsContainer");
let addButton = document.getElementById("addButton");
let saveButton = document.getElementById("saveButton");



function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};
let countEl = document.getElementById("countId");

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");




    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }


    let previousCounterValue = countEl.textContent;
    let updatedValue = parseInt(previousCounterValue) + 1;
    countEl.textContent = updatedValue;
    countEl.style.color = "green";


    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addButton.onclick = function() {
    onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    let todoObject = todoList[todoObjectIndex];
    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }
}

function onDeleteTodo(todoId) {
    let currentCountValue = countEl.textContent;
    let resultCounterValue = parseInt(currentCountValue) - 1;
    countEl.textContent = resultCounterValue;
    countEl.style.color = "red";

    if (resultCounterValue === 0) {
        countEl.style.color = "black";
    }

    let todoElement = document.getElementById(todoId);
    todoItemsContainerEl.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    todoList.splice(deleteElementIndex, 1);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoListElement = document.createElement("li");
    todoListElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoListElement.id = todoId;
    todoItemsContainerEl.appendChild(todoListElement);

    let checkboxInputEl = document.createElement("input");
    checkboxInputEl.type = "checkbox";
    checkboxInputEl.id = checkboxId;
    checkboxInputEl.checked = todo.isChecked;

    checkboxInputEl.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };

    checkboxInputEl.classList.add("checkbox-input");
    todoListElement.appendChild(checkboxInputEl);

    let labelContainerEl = document.createElement("div");
    labelContainerEl.classList.add("label-container", "d-flex", "flex-row", "justify-content-space-between");
    todoListElement.appendChild(labelContainerEl);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainerEl.appendChild(labelElement);

    let deleteIconContainerEl = document.createElement("div");
    deleteIconContainerEl.classList.add("delete-icon-container");
    labelContainerEl.appendChild(deleteIconContainerEl);

    let deleteMark = document.createElement("button");
    deleteMark.classList.add("delete-icon");
    deleteMark.textContent = "X";

    deleteMark.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainerEl.appendChild(deleteMark);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
