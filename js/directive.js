theMonkees.directive("monkeesNav", function () {
    return {
        templateUrl: "templates/directives/monkees-nav.html",
        restrict: "E"
    };
});

theMonkees.directive("monkeesFooter", function () {
    return {
        templateUrl: "templates/directives/monkees-footer.html",
        restrict: "E"
    };
});

theMonkees.directive("musicContent", function () {
    return {
        templateUrl: "templates/directives/music-content.html",
        restrict: "E"
    };
});

theMonkees.directive("videoContent", function () {
    return {
        templateUrl: "templates/directives/video-content.html",
        restrict: "E"
    };
});

theMonkees.directive("photosContent", function () {
    return {
        templateUrl: "templates/directives/photos-content.html",
        restrict: "E"
    };
});