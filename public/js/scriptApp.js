console.log("hello");
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    console.log("hi");
    $scope.employees = [];

    $scope.ageCal=function(){
        console.log($scope.dob);
        var ageDifMs = Date.now() - $scope.dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
        $scope.age=Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    // $scope.add=function(){
    //     console.log("adding employee");
    //     $scope.employees.push({name:$scope.name,
    //         email:$scope.email,
    //         dob:$scope.dob.toLocaleDateString(),
    //         dept:$scope.dept,
    //         gender:$scope.gender,
    //         age:$scope.age
    //     });
    // };

    $scope.add = function() {
      $http({method: 'post',
            url: '/api/emp'
      }).then(
        function(response) {
          if(response.data){
            alert("Record added Successfully");
          }else{
            alert("Operation failed");
          }
          console.log(self.message);
        }
      );
  }; 
});