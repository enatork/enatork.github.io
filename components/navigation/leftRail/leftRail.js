myApp.directive('leftRail', function(){
	return {

		templateUrl: 'components/navigation/leftRail/leftRail.html',
		controller: 'LeftRailController',
		controllerAs: 'lrc',
		replace:true
	};
})
.controller('LeftRailController', ['navFactory', function(navFactory){
	this.Links = navFactory.getNav();
}]);