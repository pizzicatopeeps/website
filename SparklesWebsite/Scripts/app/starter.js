var app = angular.module('app', [
]);

app.controller('TutorialsController', ['$scope',
    function ($scope) {
        $scope.tutorials = [{
            "Name": "Video One",
            "Description": "Video One Description",
            "Thumbnail": "img/portfolio/img1.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Two",
            "Description": "Video Two Description",
            "Thumbnail": "img/portfolio/img2.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Three",
            "Description": "Video Three Description",
            "Thumbnail": "img/portfolio/img3.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Four",
            "Description": "Video Four Description",
            "Thumbnail": "img/portfolio/img4.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Five",
            "Description": "Video Five Description",
            "Thumbnail": "img/portfolio/img5.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Six",
            "Description": "Video Six Description",
            "Thumbnail": "img/portfolio/img6.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        }];

    }]);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});