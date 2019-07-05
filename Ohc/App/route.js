
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
 
    
 
    //  .when('/feedback', {
    //   templateUrl: 'App/Components/Feedback/feedback.html',
 
    //     controller: 'FeedbackController',
      
    //  })
    //  .when('/select', {
    //      templateUrl: 'App/Components/Feedback/select.html',
    
    //         controller: 'FeedbackController',
         
    //     })
 
 
    //     .when('/submit', {
    //      templateUrl: 'App/Components/Feedback/submit.html',
    
    //         controller: 'FeedbackController',
         
    //     })
    //     .when('/thank', {
    //      templateUrl: 'App/Components/Feedback/thank.html',
    
    //         controller: 'FeedbackController',
         
    //     })
 
    //     .when('/admin', {
    //      templateUrl: 'App/Components/Admin/admin.html',
    
    //         controller: 'FeedbackController',
         
    //     })
     
    //     .when('/adminlogin', {
    //      templateUrl: 'App/Components/Admin/adminlogin.html',
    
    //         controller: 'LoginController',
         
    //     })
     
 
    //     .when('/patient', {
    //      templateUrl: 'App/Components/Patient/patientfeedback.html',
    //    //  controller: 'patientcontroller',
    //      controller:'patientControler',
    
           
         
    //     })
 
    //     .when('/result', {
    //      templateUrl: 'App/Components/Patient/result.html',
    //      controller: 'patientcontroller',
    //     // controller:'patientControler',
    
           
         
    //     })
 
    //     .when('/patient/:datead', {
    //      templateUrl: 'App/Components/Patient/patientfeedback.html',
    //    //  controller: 'patientcontroller',
    //      controller:'patientControler',
    
           
         
    //     })
 
 
 
    //     .when('/allpatient', {
    //      templateUrl: 'App/Components/Patient/allpatient.html',
    //      controller: 'patientcontroller',
    //     // controller:'patientControler',
    
           
         
    //     })
 
 
    //     .when('/getvalue/:id', {
    //      templateUrl: 'App/Components/Patient/patientfeedbackdetail.html',
    //      controller: 'patientControler',
    //     // controller:'patientControler',
    
           
         
    //     })
 
        
 
     .otherwise({
         templateUrl: 'App/Components/Login/login.html',
         controller: 'LoginController',
     })
    
    
 })