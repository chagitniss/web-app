function DisplayController($scope, $http){
    $scope.allLines={};
    $scope.onLoad=onLoad;
    onLoad();
    console.log("in client ctrl");

    function onLoad() {
        $http.get('serverController/loadExample')
            .success(function (data) {
                $scope.allLines = data;
                console.log("Succeed loading all records that exist in database now");
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    }

}