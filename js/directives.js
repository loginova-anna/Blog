var dir = angular.module('blog.directives', []);
dir.directive('navigationbar', [function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navigationbar.html',
		controller: ['$scope', '$http', function($scope, $http){
			$http.get('data/pages.json').success(function(data){
				$scope.pages = data;
			});
		}]
	};
}]);