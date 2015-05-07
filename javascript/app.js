var app = angular.module("comApp",[]);

app.controller("comment",function($scope){

    //$scope.test="test";
    $scope.Listcomment=[
    "This is the first comment",
    "Here's the second comment",
    "And this is one More",
    "Here is another one"]; 

    $scope.insertComment = function(){
        if($scope.commentInput== null){
            window.alert("Please enter a comment");
        }else{
            $scope.Listcomment.push($scope.commentInput);
			$scope.commentInput = "";
        }
    }
});


