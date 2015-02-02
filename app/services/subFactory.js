var dapxApp = angular.module('dapxApp');
dapxApp.factory('subFactory', function($http, $q, $timeout) {
    var factory = {
    	posts : false,
    	getPosts : function(subreddit){
    		var deferred = $q.defer();
    		$http.get('http://www.reddit.com/r/'+subreddit+'.json')
    			.success(function(data, status){
    				factory.posts = data.data.children;
    				$timeout(function(){
    					deferred.resolve(factory.posts, factory.subr);
    				}, 2000);
    			})
    			.error(function(data, status){
    				deferred.reject('Impossible de récupérer les données...')
    			});
    		return deferred.promise;
    	}
    }
    return factory;
});