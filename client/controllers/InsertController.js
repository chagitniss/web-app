 function InsertController($scope, $http) {
    $scope.allLines={};
    console.log("in insert ctrl");
    var ExValue = '';



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
    $scope.addRec = function (add) {
        onLoad()

        console.log(add)
        if (add === undefined||(add.value < 100 && add.value > 0)){
            if (add === undefined){
                ExValue = 0;
            }
            else {
                ExValue = add.value;
            }
            for (line in $scope.allLines)
            {
                if (line.Ex_value == ExValue) {
                    alert("The value exist")
                }
                else {
                    var data = $.param({
                        Ex_id : 0,
                        Ex_value :ExValue,
                    });
                    console.log(data);
                    var config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                        }
                    }
                    $http.post('serverController/addRecord', data, config)
                        .success(function (data, status, headers, config) {
                            $scope.data = data;
                            console.log("Succeed post addRec function");
                            console.log(data);
                            alert(data);
                            location.reload();
                        })
                        .error(function (data, status, header, config) {
                            console.log("Error: " + data);
                            $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                        });
                }
            }

        }
        else {
            alert("invalid input")
        }
    }
}