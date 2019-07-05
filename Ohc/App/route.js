
 //app.constant('REST_URI','http://13.250.202.199:8080/ideamed/');
 //app.constant('REST_URI','http://localhost:8088/orbit/');
 app.constant('REST_URI','http://13.251.255.12:8080/orbit/');
 app.config(function($routeProvider)
 {
 
     $routeProvider
 
     .when("/home", {
         templateUrl: 'App/Components/Home/home.html',
         controller: 'HomeController',
      
     })
 
    

 
     .otherwise({
         templateUrl: 'App/Components/Login/login.html',
         controller: 'LoginController',
     })
    
    
 })