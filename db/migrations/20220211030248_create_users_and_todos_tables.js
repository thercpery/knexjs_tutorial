/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary(); // This is the primary key.
            table.string("name").notNullable();
            table.string("email").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("todos", (table) => {
            table.increments("id").primary(); // This is the primary key.
            table.string("title").notNullable();
            table.boolean("is_completed").defaultTo(false);
            table.integer("user_id").references("id").inTable("users");
            // table.integer("user_id").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema
        .dropTableIfExists("todos")
        .dropTableIfExists("users");
};
