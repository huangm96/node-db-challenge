
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "resource 1",
          resource_description: "resource 1 description "
        },
        {
          resource_name: "resource 2",
          resource_description: "resource 2 description "
        },
        {
          resource_name: "resource 3",
          resource_description: "resource 3 description "
        },
        {
          resource_name: "resource 4",
          resource_description: "resource 4 description "
        },
        {
          resource_name: "resource 5",
          resource_description: "resource 5 description "
        }
      ]);
    });
};
