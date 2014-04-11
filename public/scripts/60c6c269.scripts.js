"use strict";angular.module("newsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/mynews",{templateUrl:"views/mynews.html",controller:"MynewsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("newsApp").controller("MynewsCtrl",["$scope","User","Preferences",function(a,b,c){a.formData={},a.topics=[{id:0,label:"Technology"},{id:1,label:"Science"},{id:2,label:"Politics"}];var d=[{id:0,label:"Hourly",rule:{minute:0}},{id:1,label:"Daily",rule:{hour:8}},{id:2,label:"Often",rule:{second:10}}];a.preferences={freq:d},a.user=b.getUser().then(function(a){return a}),a.submitForm=function(){console.log("POST",d[a.formData.freq].rule),c.getPreferences(a.user.id,d[a.formData.freq].rule)}}]),angular.module("newsApp").service("User",["$http",function(a){return{getUser:function(){return a.get("http://localhost:8080/user").then(function(a){return console.log("user",a),a.data})}}}]),angular.module("newsApp").service("Preferences",["$http",function(a){return{getPreferences:function(b){return a.get("http://localhost:8080/user/"+b+"/preferences").success(function(a){return console.log("prefs",a),a.data})},postPreferences:function(b,c){return a.post("http://localhost:8080/user/"+b+"/preferences",c).success(function(){console.log("sent prefs",c)})}}}]);