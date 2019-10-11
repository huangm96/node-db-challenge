
exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name", 255).notNullable();
        tbl.text("project_description");
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.text("task_description").notNullable();
        tbl.text("task_note");
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      }).createTable('resources', tbl => {
          tbl.increments();
          tbl.string('resource_name', 255).notNullable();
          tbl.text('resource_description')
      })
        .createTable("projects_resources", tbl => {
            tbl.increments();
            tbl
              .integer("project_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("projects")
              .onUpdate("CASCADE")
                .onDelete("CASCADE");
            tbl
              .integer("resource_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("resources")
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
      })
};

exports.down = function(knex) {
   return knex.schema
     .dropTableIfExists("projects_resources")
     .dropTableIfExists("resources")
     .dropTableIfExists("tasks")
     .dropTableIfExists("projects");
};
