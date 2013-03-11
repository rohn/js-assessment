if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var dfd = $.Deferred();
    	dfd.resolve(value);
		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
      var dfd = $.Deferred();

      $.ajax(url).then(function(resp) {
        var people = [];
        for (var i in resp.people) {
          people.push(resp.people[i].name);
        }
        dfd.resolve(people.sort());
      });

      return dfd.promise();
    }
  };
});
