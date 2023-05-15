var app = angular.module('videoeditor', []);

app.controller('videoCtrl', function ($scope) {
    var video = document.getElementById('myVideo');
    $scope.videoUrl = "RMA.mp4"
    $scope.play = function () {
        if (video.paused) {
            video.play();
        }
    }

    $scope.pause = function () {
        if (video.play) {
            video.pause();
        }
    }

    $scope.restart = function () {
        video.currentTime = 0;
        video.play();
    }

    $scope.minus = function () {
        video.currentTime = video.currentTime - 20;
        video.play();
    }

    $scope.add = function () {
        video.currentTime = video.currentTime + 20;
        video.play();
    }

    $scope.mute = function () {
        $scope.muted = !$scope.muted;
        video.muted = $scope.muted;
    }
});

