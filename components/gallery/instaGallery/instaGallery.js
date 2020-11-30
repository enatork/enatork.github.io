gallery.directive('instaGallery', function(){
	return {
		scope:{},
		templateUrl: 'components/gallery/instaGallery/instaGallery.html',
		controller: 'imgurGalleryController',
		controllerAs: 'igc'
	}
});

