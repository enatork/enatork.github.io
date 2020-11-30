gallery.directive('imgurGallery', function(){
	return {
		scope:{},
		templateUrl: 'components/gallery/imgurGallery/imgurGallery.html',
		controller: 'imgurGalleryController',
		controllerAs: 'igc'
	}
}).
controller('imgurGalleryController', ['imageFactory', function(imageFactory){
	this.images = [];
	this.error = false;
	this.albumIds = [];
	var me = this;
	imageFactory.getAlbumList().then(function(resp){
		me.albumIds = angular.copy(resp.data.data);
		
		me.getNextAlbum(me.albumIds[0]);
		
	});
	
	this.getNextAlbum = function(albumId)
	{
		if(me.albumIds){
			imageFactory.getGallery(albumId).then(function(resp){
				if(me.images.length > 0)
				{
				  me.images = me.images.concat(resp.data.data);
				}
				else
				{
					me.images = resp.data.data;
				}
				me.albumIds.shift();
			},
			function(){
				this.error = true;
			});
		}	
	}
}]);

