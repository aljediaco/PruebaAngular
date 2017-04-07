var app = angular.module("pruebaAngular", [])
    .controller("captureMessage", function($scope){
        $scope.newMessage = {};
        $scope.listMessage = [
            {
                name : "Name",
                email : "E-mail",
                subject : "Subject",
                write : "Write"
            }
        ];
        $scope.sendMessage = function(){
            $scope.listMessage.push($scope.newMessage);
            $scope.newMessage = {};
        }
    });