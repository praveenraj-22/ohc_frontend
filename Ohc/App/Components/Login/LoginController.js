app.controller('LoginController', ['LoginService' ,'$scope', '$location', '$rootScope', '$cookieStore', function (LoginService, $scope, $location, $rootScope, $cookieStore) {

    $rootScope.currentUser={};
    $scope.login = function () {
        console.log('content reached to login controller')
console.log($scope.userlogin.username)
console.log($scope.userlogin.cred)
        LoginService.login($scope.userlogin).then(function (response) {

            console.log(response.data)
            $rootScope.currentUser = response.data
            $cookieStore.put('currentUser', response.data)   //currenuser =name of user login
             $location.path('/home')
        }, function (response) {
            console.log("hit in errot")
            console.log(response.data)
            $scope.loginFail = response.data
        })
    }

   $rootScope.logout=function(){
        console.log('content reached to logout controller');
            LoginService.logout($rootScope.currentUser).then(function(response){
                
                $rootScope.currentUser={};
                
                $cookieStore.remove('currentUser');
               $scope.currentUser=null;
                $location.path('/login');
    
            },function(response){
                console.log(response.data)
                
            })
             
        }
        
        

}]);