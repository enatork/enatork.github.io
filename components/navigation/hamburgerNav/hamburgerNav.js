angular.module('myApp').directive('hamburgerNav', function(){
	return {
		scope:{},
		templateUrl:'components/navigation/hamburgerNav/hamburgerNav.html',
		controller: 'hamburgerNavController',
		controllerAs: 'hnc',
		replace:true
	}
})
.controller('hamburgerNavController', ['navFactory', '$state', function(navFactory, $state){
	var me = this;
	this.isShow = false;
	this.Links = navFactory.getNav();
	
	this.toggle = function(){
      me.isShow = !me.isShow;
	}
	
	this.stateChange = function(state){
		$state.go(state);
		this.toggle();
	}
}])