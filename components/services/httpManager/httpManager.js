http.service('httpManager', ['$http', function($http){
	var apiKey = '';
	var me = this;
	me.$http = $http;
	
	this.http = function(headers, url, data, method){

		 if (method === "GET") {
            return promise = me.$http({
                method: method,
                url: url,
                headers: headers
            });
        }
};
}]);