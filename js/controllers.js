angular.module('starter.controllers', ['ionic'])

.controller('CarInfoCtrl', function ($scope, $http, getData,tips) {
    $scope.info={
        "area":"广新大厦",
        "date":"2016-01",
        "effectime":"8月5日-10月25日",
        "count":"456"
    }
})
