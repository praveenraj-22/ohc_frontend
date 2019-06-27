var DataModule= angular.module('DataModule',[]) 

DataModule.service('HomeService',['REST_URI','$http',function(REST_URI,$http){

    this.getIWSR=function(fromdate,department,datefilter){
     
        console.log("content reached to get data");
        return $http.get(REST_URI+"/home/"+fromdate+"/"+department,datefilter)
    
    }
    
}])