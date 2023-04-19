import todoFactory from "./todo.js";

const projects = [];

const showAddProjectWindow = () => {
    document.getElementById("overlay").classList.remove("hidden");
}

const hideAddProjectWindow = () => {
    document.getElementById("overlay").classList.add("hidden");
}

const addProject = () => {
    const projectNameElem = document.getElementById("project-name");
    projects.push(todoFactory(projectNameElem.value));
    projectNameElem.value = "";

    hideAddProjectWindow();
    renderProjects();
}

const renderProjects = () => {
    const projectSectionElem = document.querySelector("div#project-section>div.container-md");
    const convertTodoToListElem = (todo) => {
        if (todo.length == 0) {
            return "";
        } else {
            return "<ul>"
                 + todo.map(obj => `<li>${obj}</li>`)
                 + "</ul>";
        }
    }
    projectSectionElem.innerHTML = (projects.map(project => {
        return `<div>
        <div>${project.name}</div>` +
        convertTodoToListElem(project.todo)
        + `<button id="${project.name}">Add Todo</button>`
        + `</div>`
    })).join("");
}

const initToolbarUI = () => {
    document.getElementById("btnAddProject").addEventListener("click", showAddProjectWindow);
    document.getElementById("btnCancel").addEventListener("click", hideAddProjectWindow);
    document.getElementById("btnConfirm").addEventListener("click", addProject);
}

export { initToolbarUI };