const projectModule = () => {
    let tempStorage = !!localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
    const projectsArray = tempStorage.length > 0 ? tempStorage : [];
    tempStorage = [];

    const addProj = (project) => {
        projectsArray.push(project);
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }
    const removeProj = (projName) => {
        projectsArray.splice(projectsArray.indexOf(projectsArray.find(proj => proj.name == projName)), 1)
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }
    return { projectsArray, addProj, removeProj };
}

export default projectModule;