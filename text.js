var app = angular.module('texteditor', []);

app.controller('textCtrl', function ($scope) {
    $scope.newIsVisible = false;
    $scope.loadIsVisible = false;
    $scope.isVisible = false;

    $scope.newFile = function () {
        console.log("New File Button Clicked");
        $scope.content = "";
        $scope.filename = "";
        $scope.newIsVisible = $scope.newIsVisible = true;
        $scope.loadIsVisible = $scope.loadIsVisible = false;
        $scope.isVisible = $scope.isVisible = true;
        $scope.message = "";
    }


    $scope.loadFile = function () {
        $scope.loadFile = function () {
            var input = document.getElementById("fileInput");
            var file = input.files[0];
            var reader = new FileReader();
            reader.onload = function () {
                $scope.$apply(function () {
                    $scope.content = reader.result;
                });
            };
            reader.readAsText(file);
        };
        $scope.loadIsVisible = $scope.loadIsVisible = true;
        $scope.newIsVisible = $scope.newIsVisible = false;
        $scope.isVisible = $scope.isVisible = true
        $scope.message = "";
    }

    $scope.saveFile = function () {
        const text = $scope.content;
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = $scope.filename;
        a.click();
    }

    $scope.cutFile = function () {
        console.log("Cut File Button Clicked");
        $scope.content = "";
    }

    $scope.copyFile = function () {
        $scope.content = "I didn't do the copy and paste part."
        $scope.isVisible = $scope.isVisible = true
    }

    $scope.pasteFile = function () {
        $scope.content = "I didn't do the copy and paste part."
        $scope.isVisible = $scope.isVisible = true
    }

    $scope.exitFile = function () {
        $scope.loadIsVisible = $scope.loadIsVisible = false;
        $scope.newIsVisible = $scope.newIsVisible = false;
        $scope.isVisible = $scope.isVisible = false;
        $scope.message = "ThankYou for using Angular Text Editor"
    }

});