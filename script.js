/**
 * Created by Katerine Alzate on 1/05/2017.
**/

/*http://api.openweathermap.org/data/2.5/find?lat=6.244203&lon=-75.58121189999997&cnt=50&APPID=e4f672a31d7142ea39accd3e015126fd*/

/*var app = angular.module('myApp', []);
app.controller('actualCtrl', function($scope, $http) {
    /*$scope.names = ["Medellin", "Belén", "El Poblado", "Berlín"];*/
    /*$http.get("http://api.openweathermap.org/data/2.5/find?lat=6.244203&lon=-75.58121189999997&cnt=50&APPID=e4f672a31d7142ea39accd3e015126fd").then(function (response) {
        $scope.myData = response.data.list;
        /*var json = $scope.myData;
        console.log(json);*/
    /*});
});*/

var pokeApp = angular.module('climaApp', ['actualCtrl']);
(function () {
    angular.module('actualCtrl', [])
        .controller('actualCtrl', actualCtrl);

    function actualCtrl($http) {
        var self = this;
        self.actualesList = [];

        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/find?lat=6.244203&lon=-75.58121189999997&units=metric&cnt=50&APPID=e4f672a31d7142ea39accd3e015126fd'
        }).then(function successCallback(response) {
            angular.forEach(response.data.list, function(item){
                self.actualesList.push(item);
            });
        }, function errorCallback(response) {
            console.log("Algo no funciona bien :(");
        });
    }
})();