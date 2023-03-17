const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let todos = [];

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	todos = todos.filter(todo => todo.id !== parseInt(li.id));
	saveTodo();
}

function saveTodo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;

	const span = document.createElement("span");
	span.innerText = newTodo.text;

	const button = document.createElement("button");
	button.innerText = "X";
	button.addEventListener("click", deleteTodo);

	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function todoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		id: Date.now(),
		text: newTodo,
	};
	todos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo) {
	const parsedTodo = JSON.parse(savedTodo);
	todos = parsedTodo;
	parsedTodo.forEach(paintTodo);
}
