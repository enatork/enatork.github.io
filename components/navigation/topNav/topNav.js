myApp.directive('topNav', function(){
	return {

		templateUrl: 'components/navigation/topNav/topNav.html',
		controller: 'topNavController',
		controllerAs: 'tnc',
		replace:true
	};
})
.controller('topNavController', ['navFactory', function(navFactory){
	this.Links = navFactory.getNav();
}]);