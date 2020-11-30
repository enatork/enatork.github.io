gallery.factory('imageFactory', ['httpManager', '$q', function(httpManager, $q){
	
	var getGallery = function(id){
		var deferred = $q.defer();

		
			var route = 'https://api.imgur.com/3/gallery/album/' + id + '/images'
			var me = this;

			httpManager.setApiHeaders
			httpManager.http({"Authorization" : "Client-ID 187ee200085d7b5"}, route, null, 'GET')
				.then(function(resp){
				deferred.resolve(resp);
				me.images = resp;
			},
			function(resp){
				deferred.reject(resp.data.error);
			});
		return deferred.promise;
		
	};
	var getAlbumList = function(){
		var deferred = $q.defer();

		if(this.albums && this.albums.length != 0)
		{
			deferred.resolve(this.albums);
		}
		else
		{
			var me = this;
			this.albums = [];
			httpManager.setApiHeaders
			httpManager.http({"Authorization" : "Client-ID 187ee200085d7b5"},'https://api.imgur.com/3/account/enatork/albums/ids', null, 'GET')
				.then(function(resp){
				deferred.resolve(resp);
				me.albums = resp;			
			},
			function(resp){
				deferred.reject(resp.data.error);
			});
		}
		return deferred.promise;
		
	}
	return {
		getGallery : getGallery,
		getAlbumList : getAlbumList
	}
}]);