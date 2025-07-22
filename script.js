let template = []      

function printar() {
    let container = document.getElementById("container")
    container.innerHTML = "<h1>To-Do List</h1>"

    template.forEach((task, index) => {
        let task_list = document.createElement("div")
        task_list.classList.add("task")
        task_list.id = `${index}`

        task_list.innerHTML = `
            <input type="checkbox" onclick="check(${index})">
            <p>${task.description}</p>
            <input type="button" onclick="delete_task(${index})" value="Excluir">
        `;

        container.appendChild(task_list)
    })
}

function create() {
    let new_template = {
        "description": "",
        "status": "to-do"
    }

    let new_description = prompt("Digite a descrição: ")
    if (new_description && new_description.trim() !== "") {
        new_template.description = new_description.trim()
        template.push(new_template)
        printar()
    }
}

function delete_task(index) {
    template.splice(index, 1)
    printar()
}

function check(index) {
    let task_done = document.getElementById(index)
    let checkbox = task_done.querySelector('input[type="checkbox"]')
    let description = task_done.querySelector('p')

    if (checkbox.checked) {
        task_done.style.backgroundColor = "rgba(72, 201, 176, 0.3)"
        description.style.textDecoration = "line-through" 
    } else {
        task_done.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
        description.style.textDecoration = "none" 
    }
}
