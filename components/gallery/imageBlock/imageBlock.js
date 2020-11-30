gallery.directive('imageBlock', function(){
	return{
		scope: {
			imageData: '='
		},
		templateUrl: 'components/gallery/imageBlock/imageBlock.html',
		controller: 'imageBlockController',
		controllerAs: 'ibc',
		replace: true,
		bindToController: true,
	}	
})
.controller('imageBlockController',  function($element){
	this.title = this.imageData.title;
	this.link = this.imageData.link;
})