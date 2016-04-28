var app = angular.module('blog', ['ngRoute', 'blog.controllers']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'views/posts.html',
			controller: 'PostController as PostCtrl'
		}).when('/post/:id', {
			templateUrl: 'views/singlepost.html',
			controller: 'SinglePostController as SPCtrl'
		}).when('/page/:id',{
			templateUrl: 'views/page.html',
			controller: 'PageController as PageCtrl'
		}).when('/new', {
			templateUrl:'views/newpost.html',
			controller: 'NewPostController as NewPostCtrl'
		}).otherwise({
			redirectTo: '/'
		});
	}]);

app.directive("contenteditable", function() {
	  return {
	    restrict: "A",
	    require: "ngModel",
	    link: function(scope, element, attrs, ngModel) {

	      function read() {
	        ngModel.$setViewValue(element.html());
	      }

	      ngModel.$render = function() {
	        element.html(ngModel.$viewValue || "");
	      };

	      element.bind("blur keyup change", function() {
	        scope.$apply(read);
	      });
	    }
	  };
	});

