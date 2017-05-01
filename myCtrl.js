app.controller("myCtrl", ['$scope', '$http',function($scope,$http) {
    $scope.productName = "lotion";
    $scope.productPrice = 0;
    $scope.productCatalog = "";
    $scope.productReview = "";
    $scope.productOwned = [
	    {"name":"fresh rose lotion", "catalog":"skin care / face", "price":"40", "dateofpurchase":"2017-04"}, 
	    {"name":"la mer eye concentrate", "catalog":"skin care / eye", "price":"160", "dateofpurchase":"2017-03"}, 
	    {"name":"too faced peach eyeshodow", "catalog":"cosmetics / eye", "price":"49", "dateofpurchase":"2017-02"} , 
	    {"name":"givenchy ink fundation", "catalog":"cosmetics / face", "price":"60", "dateofpurchase":"2017-04"} , 
	    {"name":"sephora conture powder", "catalog":"cosmetics / face", "price":"9", "dateofpurchase":"2017-04"} 
    ];
    $scope.showPurchaseForm = false;
    $scope.showPurchases = false;
    $scope.purchase = function(){
    	return "Just bought " + $scope.productName + " for $" + $scope.productPrice;
    }

    $scope.history = function(){
        //  $http.get('data.json').success(function(data){
        //     $scope.productOwned = data;
        return "Already bought " + $scope.productOwned.length + " products";
        //});        
    }

    $scope.showPurchaseForms = function(){
    	$scope.showPurchaseForm = !$scope.showPurchaseForm;
    }

    $scope.showPurchaseNow = function(){
        $scope.showPurchases = !$scope.showPurchases;
    }
}]);

