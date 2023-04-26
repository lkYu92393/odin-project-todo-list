import projectFactory from "./factory/project.js";
import projectModule from "./module/project.js";

const projects = projectModule();

const showAddProjectWindow = () => {
    document.getElementById("overlay").classList.remove("hidden");
}

const hideAddProjectWindow = () => {
    document.getElementById("overlay").classList.add("hidden");
}

const addProject = () => {
    const projectNameElem = document.getElementById("project-name");
    if (!!projectNameElem.value) {
        projects.addProj(projectFactory(projectNameElem.value));
        projectNameElem.value = "";

        hideAddProjectWindow();
        renderProjects();
    } else {
        alert("Project name can't be empty.");
    }
}

const addTodoHandler = (ev) => {
    let todo = prompt("Please enter the todo thing.");
    projects.projectsArray.find(project => project.name == ev.target.name).addTodo(todo);
    renderProjects();
};

const removeProjectHandler = (ev) => {
    console.log(ev.target.name)
    projects.removeProj(ev.target.name);
    renderProjects();
};

const renderProjects = () => {
    const projectSectionElem = document.querySelector("div#project-section>div.container-md");
    const convertTodoToListElem = (name, todo) => {
        if (todo.length == 0) {
            return "-";
        } else {
            return todo.map((obj, index) => `<li>${obj}<button name="${name}" value="${index}">Remove</button></li>`).join("");
        }
    }
    projectSectionElem.innerHTML = (projects.projectsArray.map(project => {
        return `<div>
        <div><h4>${project.name}</h4></div>` +
            "<div>Todo List:<br/><ul></ul>" +
            convertTodoToListElem(project.name, project.todo)
            + "</ul></div>"
            + `<button class="big btnAdd" name="${project.name}">Add Todo</button>`
            + `<button class="big btnRemove" name="${project.name}">Remove Project</button>`
            + `</div>`
    })).join("");
    Array.from(document.querySelectorAll("button.btnAdd")).forEach(elem => {
        elem.addEventListener("click", addTodoHandler);
    })
    Array.from(document.querySelectorAll("button.btnRemove")).forEach(elem => {
        elem.addEventListener("click", removeProjectHandler);
    })
    Array.from(document.querySelectorAll("li button"))
        .forEach(elem => elem.addEventListener("click", (ev) => {
            projects.projectsArray.find(project => project.name == ev.target.name).removeTodoByIndex(parseInt(ev.target.value));
            renderProjects();
        })
        );
}

const initToolbarUI = () => {
    document.getElementById("btnAddProject").addEventListener("click", showAddProjectWindow);
    document.getElementById("btnCancel").addEventListener("click", hideAddProjectWindow);
    document.getElementById("btnConfirm").addEventListener("click", addProject);
    renderProjects();
}

export { initToolbarUI };