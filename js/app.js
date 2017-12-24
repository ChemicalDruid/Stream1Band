var theMonkees = angular.module("theMonkees", ["ngRoute"]);

theMonkees.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/music", {
            templateUrl: "templates/music.html",
            controller: "MusicController"
        })
        .when("/music/:imageId", {
            templateUrl: "templates/image.html",
            controller: "ImageController"
        })
        .when("/gigs", {
            templateUrl: "templates/gigs.html",
            controller: "GigsController"
        })
        .when("/gigs/:eventId", {
            templateUrl: "templates/event.html",
            controller: "EventController"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "ContactController"
        })
        .when("/book", {
            templateUrl: "templates/book.html",
            controller: "BookController"
        })
        .when("/bookconfirm", {
            templateUrl: "templates/bookconfirm.html",
            controller: "ConfirmController"
        })
        .otherwise({redirectTo: "/"});
});

angular.module('theMonkees').run(["$rootScope", "$anchorScroll", function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function () {
        $anchorScroll();
    });
}]);
