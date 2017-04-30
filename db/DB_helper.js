module.exports = function makeDataHelpers(knex) {
  return {
    getMapNames: function(success, failure) {
      return knex.select("title").from("maps");
    },
    createMap: function(info, success, failure) {
      return knex('maps')
      .returning('id')
      .insert({title: info.title, description: info.description, user_id: info.user_id});
     /* .then(
        function(result, id) {
        success(result, id);
      })
      .catch(
        function(reason) {
          failure(reason);
        }) */
    },
    addPoints: function(info, success, failure) {
      knex('points').insert({title: info.title,
       description: info.description, img: info.img,
        map_id: info.map_id, lat: info.lat, long: info.long,
         user_id: info.user_id}).
      then(
        function(result) {
          success(result);
        }).
      catch(
        function(reason) {
          failure(reason);
        })
    },
    findUserByEmail: function(info, success, failure) {    // autheticates user credential
      knex('users').select('id', 'password')
      .where({email: info.email})   // where email = info.email
      .limit(1).
      then(
        function(result) {
          success(result);
        }).
      catch(
        function(reason) {
          failure(reason);
        })
    },
    getPointByMapId: function(id, success, failure) {
      return knex.select('*').from('points').where('map_id',id);
    }

    //select points.title, lat, long from points join users on points.user_id = users.id
    // join maps on points.map_id = maps.id where points.user_id = 1;
  }
}
