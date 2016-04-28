var contr = angular.module('blog.controllers', ['blog.directives']);
 contr.controller('PostController', ['$http',  function($http){
	$http.get('data/posts.json').success(function(data){
		this.posts = data;
	}.bind(this));

 }]);

 contr.controller('SinglePostController', [ '$http', '$routeParams', function($http, $routeParams){
 	$http.get('data/posts.json').success(function(data){
 		this.post = data[$routeParams.id];
 	}.bind(this));
 }]);

 contr.controller('PageController', ['$http', '$routeParams', function($http, $routeParams){
 	$http.get('data/pages.json').success(function(dat){
 		this.page = dat[$routeParams.id];
 	}.bind(this));
 }]);

 contr.controller('NewPostController', ['$http', '$routeParams', function($http, $routeParams){
 	this.newtitle = 'Your title here';
 	this.newcontent = 'Your post here';
 	$http.get('data/posts.json').success(function(data){
		this.allposts = data;
	}.bind(this));
 	this.saveNewPost = function(){
 		
 		this.allposts.push ({"title": this.newtitle, "content": this.newcontent});
 		alert(this.allposts[3].title); 
 		$http.post("data/posts.json", JSON.stringify(this.allposts)).success(function(data, status) {
            alert(data, 'http');
        });
 	}.bind(this);

 	this.tryToSave = function(){
	    var textToWrite = 'texttosave';
	    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	    var fileNameToSaveAs = 'saved.json';
	      var downloadLink = document.createElement("a");
	    downloadLink.download = fileNameToSaveAs;
	    downloadLink.innerHTML = "Download File";
	    if (window.webkitURL != null)
	    {
	        // Chrome allows the link to be clicked
	        // without actually adding it to the DOM.
	        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	    }
	    else
	    {
	        // Firefox requires the link to be added to the DOM
	        // before it can be clicked.
	        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	        downloadLink.onclick = destroyClickedElement;
	        downloadLink.style.display = "none";
	        document.body.appendChild(downloadLink);
	    }

	    downloadLink.click();
	}
 }]);
