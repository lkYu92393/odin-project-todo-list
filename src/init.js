export default () => {
    const app = document.getElementById("content");
    app.innerHTML = `
    <header>
        <div class="container-md">
            <h1>Todo List</h1>
            <div>Todo List is a project from odin project.</div>
        </div>
    </header>
    <div class="toolbar">
        <div class="container-md">
            <button id="btnAddProject">Add Project</button>
        </div>
    </div>
    <div id="overlay" class="hidden">
        <div>
            <h1>Create new project</h1>
            <input id="project-name">
            <button id="btnConfirm">Confirm</button>
            <button id="btnCancel">Cancel</button>
        </div>
    </div>
    <div id="project-section">
        <div class="container-md">
        </div>
    </div>`;
}