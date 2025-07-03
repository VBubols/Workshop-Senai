let template = [
    {
    "description": "Descricao padrao",
    "status": "to-do"
    }
]      

function printar(){
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

    console.log(template)
}

function create(){
    let new_template = {
        "description": "",
        "status": "to-do"
    }

    let new_description = prompt("Digite a descrição: ")
    new_template.description = new_description
    template.push(new_template)
    printar()
}

function delete_task(index){
    template.splice(index, 1)
    printar()

}

function check(index){
    let task_done = document.getElementById(index)
    let checkbox = document.querySelector('input[type="checkbox"]')

    if(checkbox.checked){
        task_done.style.backgroundColor = "red";  
    } else{
        task_done.style.backgroundColor = "#aaaaaa";
    }
}

printar()