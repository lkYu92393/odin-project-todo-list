const projectModule = () => {
    const projectsArray = [];
    const addProj = (project) => {
        projectsArray.push(project)
    }
    const removeProj = (projName) => {
        projectsArray.splice(projectsArray.indexOf(projectsArray.find(proj => proj.name == projName)), 1)
    }
    return { projectsArray, addProj, removeProj };
}

export default projectModule;