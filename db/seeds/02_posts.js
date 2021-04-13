
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'Sample Blog',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec elementum mi purus, dignissim faucibus lectus pulvinar vitae.',
          user_id:1
        }, {
          id: 2,
          title: 'Sample Blog',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec elementum mi purus, dignissim faucibus lectus pulvinar vitae.',
          user_id: 2
        }, {
          id: 3,
          title: 'Sample Blog',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec elementum mi purus, dignissim faucibus lectus pulvinar vitae.',
          user_id: 3
        },        
      ]);
    });
};
