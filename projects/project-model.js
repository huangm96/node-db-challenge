const db = require("../data/db-config");

module.exports = {
  findProjects,
  findProjectById,
  findResoureces,
  findTasksByProjectId,
  findResourcesByProjectId,
  addProject,
    addResource,
  addTask
};

function findProjects() {
  return db("projects");
}

function findProjectById(id) {
  return (
    db("projects")
      .where({ id })
      .first() 
  );
}
function findResoureces() {
  return db("resources");
}

function findTasksByProjectId(project_id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .where({ project_id: project_id })
    .select(
      "project_name",
      "project_description",
      "task_description",
      "task_note",
      "tasks.completed" 
    );
}

function findResourcesByProjectId(project_id) {
  return db("resources")
    .join(
      "projects_resources",
      "resources.id",
      "projects_resources.resource_id"
    )
    .join("projects", "projects.id", "projects_resources.project_id")
    .where({ project_id: project_id })
    .select(
      "project_name",
      "project_description",
      "resource_name",
      "resource_description",
    );
    
}

function addProject(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => {
      return findProjectById(id);
    });
}

function addResource(resource) {
  return db("resources")
    .insert(resource, "id")
    
}

function addTask(task, project_id) {
  return db("projects")
    .where({ id: project_id })
    .then(() => {
      return db("tasks")
        .insert(task)
        .then(() => {
          return findProjectById(project_id);
        });
    });
}