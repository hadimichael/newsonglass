"use strict";angular.module("newsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/mynews",{templateUrl:"views/mynews.html",controller:"MynewsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("newsApp").controller("MynewsCtrl",["$scope","$route","User","Preferences",function(a,b,c,d){a.formData={},a.preferences={freq:[],topics:[]},c.getUser().then(function(b){a.user=b.user,d.getPreferences(b.user.id).then(function(b){a.preferences=b.data})}),a.submitForm=function(){if(a.formData.freq){for(var c in a.preferences.freq)a.preferences.freq[c].selected=!1;a.preferences.freq[a.formData.freq].selected=!0}d.postPreferences(a.user.id,a.preferences).then(function(){b.reload()})}}]),angular.module("newsApp").service("User",["$http",function(a){return{getUser:function(){return a.get("http://localhost:8080/user").then(function(a){return console.log("user",a),a.data})}}}]),angular.module("newsApp").service("Preferences",["$http",function(a){return{getPreferences:function(b){return a.get("http://localhost:8080/user/"+b+"/preferences").success(function(a){return console.log("GET results:",a),a.data})},postPreferences:function(b,c){return a.post("http://localhost:8080/user/"+b+"/preferences",c).success(function(a){return console.log("POST",c),console.log("POST response",a),a})}}}]);