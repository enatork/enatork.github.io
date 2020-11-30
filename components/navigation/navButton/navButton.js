myApp.directive('navButton', function(){
	return {
		scope:{ 
			name: '@',
			state: '@'
		},
		templateUrl: 'components/navigation/navButton/navButton.html',
		controller: 'NavController',
		controllerAs: 'nc',
		bindToController: true,
		replace:true
	}
}).
controller('NavController', ['$state', '$scope' ,function($state, $scope){
	var me = this;
	
	this.changeState = function(){
		$state.go(me.state);
	}
}]);
