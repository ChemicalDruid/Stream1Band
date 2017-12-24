theMonkees.factory("monkees", ["$http", function ($http) {
    return $http.get("monkees.json")
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);

theMonkees.factory("events", ["$http", function ($http) {
    return $http.get("events.json")
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);