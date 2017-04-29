module.exports = function makeDataHelpers(knex) {
  return {
    getMapNames: function(success, failure) {
      knex.select("naw").from("maps").
      then(
        function(result) {
        success(result);
      }).
      catch(
      function(reason) {
        failure(reason);
      });
    },
    createMap: function(info, success, failure) {
      knex('maps').insert({title: info.title, description: info.description, user_id: info.user_id}).
      then(
        function(result) {
        success(result);
      }).
      catch(
        function(reason) {
          failure(reason);
        })
    }
    //select points.title, lat, long from points join users on points.user_id = users.id
    // join maps on points.map_id = maps.id where points.user_id = 1;
  }
}
