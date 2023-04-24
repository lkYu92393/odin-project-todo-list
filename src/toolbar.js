import todoFactory from "./factory/todo.js";

const projects = [];

const showAddProjectWindow = () => {
    document.getElementById("overlay").classList.remove("hidden");
}

const hideAddProjectWindow = () => {
    document.getElementById("overlay").classList.add("hidden");
}

const addProject = () => {
    const projectNameElem = document.getElementById("project-name");
    if (!!projectNameElem.value) {
        projects.push(todoFactory(projectNameElem.value));
        projectNameElem.value = "";
    
        hideAddProjectWindow();
        renderProjects();
    } else {
        alert("Project name can't be empty.");
    }
}

const renderProjects = () => {
    const projectSectionElem = document.querySelector("div#project-section>div.container-md");
    const convertTodoToListElem = (name, todo) => {
        if (todo.length == 0) {
            return "-";
        } else {
            return todo.map((obj, index) => `<li>${obj}<button name="${name}" value="${index}">Remove</button></li>`).join("");
        }
    }
    projectSectionElem.innerHTML = (projects.map(project => {
        return `<div>
        <div><h4>${project.name}</h4></div>` +
        "<div>Todo List:<br/><ul></ul>" +
        convertTodoToListElem(project.name, project.todo)
        + "</ul></div>"
        + `<button class="big" id="${project.name}">Add Todo</button>`
        + `</div>`
    })).join("");
    projects.forEach(project => {
        document.getElementById(project.name).addEventListener("click", (ev) => {
            let todo = prompt("Please enter the todo thing.");
            projects.find(project => project.name == ev.target.id).addTodo(todo);
            renderProjects();
        })
    });
    Array.from(document.querySelectorAll("li button"))
        .forEach(elem => elem.addEventListener("click", (ev) => {
            projects.find(project => project.name == ev.target.name).removeTodoByIndex(parseInt(ev.target.value));
            renderProjects();
        })
    )
}

const initToolbarUI = () => {
    document.getElementById("btnAddProject").addEventListener("click", showAddProjectWindow);
    document.getElementById("btnCancel").addEventListener("click", hideAddProjectWindow);
    document.getElementById("btnConfirm").addEventListener("click", addProject);
}

export { initToolbarUI };