myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../templates/home.html"
    })
    .state('work', {
      url: "/work",
      templateUrl: "../templates/projects.html"
    })
    .state('photography', {
      url: "/photography",
      templateUrl: "../templates/gallery.html"
    })
      .state('resume', {
      url: "/resume",
      templateUrl: "../templates/resume.html"
    })
   
});