"use strict";angular.module("newsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/mynews",{templateUrl:"views/mynews.html",controller:"MynewsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("newsApp").controller("MynewsCtrl",["$scope","User","Preferences",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.user=b.getUser().then(function(a){c.getPreferences(a.id)})}]),angular.module("newsApp").service("User",["$http",function(a){return{getUser:function(){return a.get("/user").then(function(a){return a.data})}}}]),angular.module("newsApp").service("Preferences",["$http",function(a){return{getPreferences:function(b){return a.get("/user/"+b+"/preferences").then(function(a){return a.data})}}}]);