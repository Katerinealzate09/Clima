/**
 * Created by Katerine Alzate on 1/05/2017.
 **/
var app = angular.module("climaApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/actual", {
            templateUrl: "actual.htm",
            controller: "actualCtrl"
        })
        .when("/pronostico", {
            templateUrl: "pronostico.htm",
            controller: "pronosticoCtrl"
        })
});
app.controller('actualCtrl', function ($scope, $http) {
        $http.get("http://api.openweathermap.org/data/2.5/find?lat=6.244203&lon=-75.58121189999997&units=metric&cnt=50&APPID=e4f672a31d7142ea39accd3e015126fd").then(function (response) {
            $scope.myData = response.data.list;
        });
});
app.controller('pronosticoCtrl', function ($scope, $http) {
    var url ="http://api.openweathermap.org/data/2.5/forecast?q=";
    var apikey ="&APPID=e4f672a31d7142ea39accd3e015126fd";
    $http.get(url+this.selectedName+apikey).then(function (response) {
        $scope.myDataPronostico = response.data.list;

    });
});

