Database helper documentation:


notes: all following methods will require 2 call back functions

in case of sucessful query the first call back will be invoked

in case of failure the second call back will be invoked

methods:

getMapNames (cb_success(result), cb_failure(error_message))
** this method takes in 2 call back functions.



createMap: (info, success, failure)