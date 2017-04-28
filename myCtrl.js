app.controller("myCtrl", function($scope) {
    $scope.productName = "lotion";
    $scope.productPrice = 0;
    $scope.productCatalog = "";
    $scope.productReview = "";
    $scope.productOwned = [
	    {"name":"fresh loction", "catalog":"skin care/face"}, 
	    {"name":"la mer eye concentrate", "catalog":"skin care/eye"}, 
	    {"name":"too faced peach eyeshodow", "catalog":"cosmetics/eye"} , 
	    {"name":"amarni fundation", "catalog":"cosmetics/face"} , 
	    {"name":"sephora conture powder", "catalog":"cosmetics/face"} 
    ];
    $scope.showPurchase = false;
    $scope.purchase = function(){
    	return "Ying just bought " + $scope.productName + " for $" + $scope.productPrice;
    }

    $scope.history = function(){
    	return "Ying already bought " + $scope.productOwned.length + " products";
    }

    $scope.showPurchaseNow = function(){
    	$scope.showPurchase = !$scope.showPurchase;
    }
});

