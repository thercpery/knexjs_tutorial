/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {id: 1, name: 'John Doe', email: "johndoe@mail.com"},
    {id: 2, name: 'Jane Doe', email: "janedoe@mail.com"},
    {id: 3, name: 'RC Pery', email: "rcpery@mail.com"}
  ]);

  await knex.raw("select setval('users_id_seq', max(users.id)) from users");
};
