/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del();
  await knex('todos').insert([
    {
      id: 1, 
      title: 'Eat',
      user_id: 3
    },
    {
      id: 2, 
      title: 'Sleep',
      user_id: 3
    },
    {
      id: 3, 
      title: 'Code',
      user_id: 3
    },
    {
      id: 4, 
      title: 'Repeat',
      user_id: 3
    },
    {
      id: 5, 
      title: 'Go to gym',
      user_id: 1
    },
    {
      id: 6, 
      title: 'Go to meeting',
      user_id: 2
    }
  ]);

  await knex.raw("select setval('todos_id_seq', max(todos.id)) from todos");
};

