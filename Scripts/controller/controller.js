angular.module("pruebaAngular", [])
    .controller("captureMessage", function($scope, $http){
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
            $http.post("http://127.0.0.1:8000/messages/",
            {
                name = $scope.newMessage.name,
                email = $scope.newMessage.email,
                subject = $scope.newMessage.subject,
                write = $scope.newMessage.write,
            })
            .success(function(){
                alert("datos enviados")
                console.log(data);
                $scope.newMessage = {};
             })
             .error(function(err, status){

             });
        }

         $http.get("http://127.0.0.1:8000/messages/")
            .success(function(){
                console.log(data)
             })
             .error(function(err, status){

             });
    });