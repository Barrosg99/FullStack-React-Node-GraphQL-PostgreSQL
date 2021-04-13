
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Pratik Agashe',
          email: 'pratik@heady.io',
          password: 'pratik',
        }, {
          id: 2,
          name: 'Gabriel',
          email: 'gabriel@heady.io',
          password: 'gabriel',
        }, {
          id: 3,
          name: 'barros',
          email: 'barros@heady.io',
          password: 'barros',
        },

      ]);
    });
};
