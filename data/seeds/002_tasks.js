
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { task_description: "task 1", project_id: 1, task_note: "task note 1" },
        { task_description: "task 2", project_id: 1 },
        { task_description: "task 3", project_id: 1 },
        { task_description: "task 1", project_id: 2 },
        { task_description: "task 2", project_id: 2 }
      ]);
    });
};
