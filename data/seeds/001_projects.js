
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "project 1",
          project_description: "the project 1 description"
        },
        {
          project_name: "project 2",
          project_description: "the project 2 description"
        }
      ]);
    });
};
