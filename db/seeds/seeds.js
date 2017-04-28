exports.seed = function(knex, Promise) {

  return Promise.all([knex('users').del(), knex('maps').del(), knex('favourites').del(), knex('points').del()])
    .then(() => {
        return knex('users').insert([
          {name: 'Alice', email: 'Alice@gmail.com', password: '123'},
          {name: 'Bob',   email: 'Bob@gmail.com', password: '123'},
          {name: 'Charlie', email: 'Charlie@gmail.com', password: '123'}
        ], "id");
    })
    .then((ids) => {
      return Promise.all([ids, knex('maps').insert([
        {title: 'Gastown lunch spots', description: 'cheap lunch spots', user_id: ids[0]},
        {title: 'Yaletown hipster cafes',   description: 'smoke weed and ride uni-cycles', user_id: ids[1] },
        {title: 'Places I peed at', description: 'I pee', user_id: ids[2]}
      ], "id")]);
    })
    .then((all) => {
      const users = all[0];
      const maps = all[1];
      return Promise.all([all,knex('favourites').insert([
        {user_id: users[0], map_id: maps[1]},
        {user_id: users[1], map_id: maps[2]}
      ])]);
    })
    .then((all) => {
      const users = all[0][0];
      const maps = all[0][1];
      return knex('points').insert([
        {title: "point1", description: "this is point1", img: "/folderpath1", map_id: maps[0], user_id: users[0], lat: 49.2742939, long: -123.1511973},
        {title: "point2", description: "this is point2", img: "/folderpath2", map_id: maps[1], user_id: users[0], lat: 49.268274, long: -123.1545482}
        ])
    })
    .catch(error => {
      console.log(error);
    })
};
