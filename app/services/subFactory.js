var dapxApp = angular.module('redditApp');
dapxApp.factory('subFactory', function($http, $q, $timeout) {
    var factory = {
    	posts : false,
    	getPosts : function(subreddit){
    		var deferred = $q.defer();
    		$http.get('http://www.reddit.com/r/'+subreddit+'.json')
    			.success(function(data, status){
    				factory.posts = angular.fromJson(data.data.children);
    				$timeout(function(){
    					deferred.resolve(factory.posts);
    				}, 2000);
    			})
    			.error(function(data, status){
    				deferred.reject('Impossible de récupérer les données...')
    			});
    		return deferred.promise;
    	},

        getThread : function(permalink){
            var deferred = $q.defer();
            $http.get('http://www.reddit.com'+permalink+'.json')
                .success(function(data, status){
                    factory.thread = data[1].data.children;
                    $timeout(function(){
                        deferred.resolve(factory.thread);
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