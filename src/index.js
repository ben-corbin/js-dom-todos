const liParent = document.querySelector("#todo-list")
const input = document.querySelector("Form")

function addTodo(todo) {
    
    const liEl = document.createElement('li');
    liEl.innerText = todo.title
    liParent.append(liEl);
    
}

  
function listenToAddTodoForm() {
    
input.addEventListener("submit", function (event) {
    
    event.preventDefault()
    console.log("submit")
    const todo = {
        title: input.title.value,
        completed: false
    }

    // CREATE
    fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })

    
    .then((res) => res.json())
    .then((todo) => addTodo(todo))
    input.reset()
    })
    
}

function addTodos(todos) {
    console.log(todos)
    todos.forEach((todo) => addTodo(todo))
}

function getTodos() {
    listenToAddTodoForm()

    liParent.innerHTML = ""
    fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((todos) => addTodos(todos))
    
}

getTodos()

