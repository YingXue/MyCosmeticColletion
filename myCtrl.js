app.controller("myCtrl", function($scope) {
    $scope.productOwned= 50;
    $scope.productName = "lotion";
    $scope.productPrice = 0;
    $scope.productCatalog = "";
    $scope.productReview = "";

    $scope.purchase = function(){
    	return "Ying just bought " + $scope.productName + " for $" + $scope.productPrice;
    }

    $scope.history = function(){
    	return "Ying already bought " + $scope.productOwned + " products";
    }
});

