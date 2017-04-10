'use strict';

var app = angular.module('appGeneral', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{  // nombre del estado
            url:'/home',  //url para llamar
            templateUrl:'Views/home.html', //vista que invoca
            controller: 'HomeController', //controlador que usa
            controllerAs: 'home' // alias del controlador
        });

    $urlRouterProvider.otherwise('/home');
});