"use strict";
class TODO {
    constructor() {
        this.todos = [];
    }
    addTodo() {
        let todo = document.getElementById('todoInput');
        if (todo.value) {
            this.todos.push({
                id: this.todos.length,
                title: todo.value
            });
            todo.value = '';
            this.renderState();
        }
        else {
            alert('Empty value');
        }
    }
    editTodo(id) {
        let todo = this.todos.find(todo => todo.id == id);
        let selectedDiv = document.getElementById(`${id}-DIV`);
        if (selectedDiv && todo) {
            selectedDiv.innerHTML = `
            <div id = '${todo.id}-DIV'>
                <p id = '${todo.id}-p' contenteditable>${todo.title}</p>
                <button onclick = 'todos.saveTodo(${todo.id})'>Save</button>
            </div>
            `;
        }
    }
    saveTodo(id) {
        let pTag = document.getElementById(`${id}-p`);
        if (pTag) {
            for (let todo of this.todos) {
                if (todo.id == id) {
                    todo.title = pTag.innerText;
                    this.renderState();
                    break;
                }
            }
        }
    }
    deleteTodo(id) {
        console.log(id);
        this.todos = this.todos.filter(todo => todo.id != id);
        this.renderState();
    }
    renderState() {
        let todoDiv = document.getElementById('todos');
        if (todoDiv) {
            todoDiv.innerHTML = '';
            this.todos.forEach((todo) => {
                todoDiv === null || todoDiv === void 0 ? void 0 : todoDiv.insertAdjacentHTML('beforeend', `
                    <div id = '${todo.id}-DIV'>
                        <p id = '${todo.id}-p'>${todo.title}</p>
                        <button onclick = 'todos.editTodo(${todo.id})'>Edit</button>
                        <button onclick = 'todos.deleteTodo(${todo.id})'>Delete</button>
                    </div>
                    `);
            });
        }
    }
}
let todos = new TODO();
