let template = []      

function printar(){
    let container = document.getElementById("container")

    container.innerHTML = ""

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

    count()
}

function create(){
    let new_template = {
        "description": "",
        "status": "to-do"
    }

    let new_description = document.getElementById("description").value

    if(new_description == ""){
        alert("Não é possível inserir uma tarefa vazia.")
    } else {
        new_template.description = new_description
        template.push(new_template)
        printar()
    }
}

function delete_task(index){
    template.splice(index, 1)
    printar()
}

function check(index){
    let task_done = document.getElementById(index)
    let checkbox = task_done.querySelector('input[type="checkbox"]')
    
    if(checkbox.checked){
        task_done.style.backgroundColor = "red";
        template.status = "done"  
        console.log(template.status)
    } else{
        task_done.style.backgroundColor = "#aaaaaa";
        template.status = "to-do"
        console.log(template.status)
    }
    count()
}

function count(){
    let done = 0

    if(template.status == "done"){
        
        console.log("passou aqui")
    } else{
        console.log("passou no else")
    }

    let counter = document.getElementById("counter")
    counter.textContent = `Tarefas feitas: ${done}/${template.length}`

}