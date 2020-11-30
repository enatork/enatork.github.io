myApp.factory('navFactory',  function(){
	
	var getNav = function(){
		return this.Links = 
		[
		{
			name: 'home', 
			state: 'home'
		},
		{
			name: 'work',
			state: 'work'
		},
		{
			name: 'resume',
			state: 'resume'
		}
		]
	}

	return {
		getNav: getNav
	};
});