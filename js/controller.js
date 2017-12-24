theMonkees.controller("HomeController", function ($scope) {
    $scope.headerTitle = "The Monkees";
    $scope.headerSubtitle = "for believers";
    $scope.mainTitle = "Wanna remember?";
    $scope.mainSubtitle = "tap on play below";
});

theMonkees.controller("MusicController", ["$scope", "monkees", function ($scope, monkees) {
    $scope.headerTitle = "monkee business";
    $scope.headerSubtitle = "decades of memories";
    $scope.musicTitle = "Our Music";
    $scope.musicSubtitle = "Here are some examples for you";
    $scope.videoTitle = "Our Videos";
    $scope.videoSubtitle = "Look into our glorious past in full motion!";
    $scope.photoTitle = "Our Photos";
    $scope.photoSubtitle = "Check out some of our favourite snaps!";
    $scope.photoSubtitleInfo = "Tap on an image for more";
    $scope.findmoreTitle = "Want more?";
    $scope.findmoreSubtitle = "Head over to...";

    monkees.success(function (data) {
        $scope.myMonkee = data;
    });
}]);

theMonkees.controller("ImageController", ["$scope", "monkees", "$routeParams", function ($scope, monkees, $routeParams) {
    monkees.success(function (data) {
        $scope.myMonkeeImg = data[$routeParams.imageId];
    });
    $scope.currentImageIndex = parseInt($routeParams.imageId);
}]);

theMonkees.controller("GigsController", ["$scope", "events", function ($scope, events) {
    $scope.headerTitle = "CALENDAR";
    $scope.headerSubtitle = "SEE WHERE WE PLAY AND JOIN US IF YOU'RE NEARBY";
    $scope.headerSubtitleInfo = "ALWAYS UPDATED AND READY FOR MORE!";
    $scope.endTitle = "FEEL LIKE WATCHING THE MONKEES PLAY LIVE AT YOUR VENUE?";
    events.success(function (data) {
        $scope.myEvents = data;
    });
}]);

theMonkees.controller("EventController", ["$scope", "events", "$routeParams", "$sce", function ($scope, events, $routeParams, $sce) {
    events.success(function (data) {
        $scope.myEvent = data[$routeParams.eventId];
        $scope.myEventMap = $sce.trustAsResourceUrl($scope.myEvent.map);
    });
    $scope.currentEventIndex = parseInt($routeParams.eventId);
}]);

theMonkees.controller("ContactController", function ($scope, $location) {
    $scope.title = "Reach Us";
    $scope.subtitle = "Check out our social media";
    $scope.submitted = false;
});

theMonkees.controller("BookController", function ($scope, $location) {
    $scope.title = "Book Now";
    $scope.user = {};
    $scope.submitted = false;

    $scope.formsubmit = function () {
        if ($scope.BookForm.$valid) {
            $scope.submitted = true;
            $location.path("/bookconfirm");
        }
        else {
            $scope.submitted = false;
        }
    };
});

theMonkees.controller("ConfirmController", function ($scope, $routeParams) {
    $scope.title = "That's it!";
});
