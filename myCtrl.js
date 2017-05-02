app.controller("myCtrl", ['$scope', '$http',function($scope,$http) {
    $scope.productName = "";
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
    $scope.showPurchaseButton = true;
    


    $scope.history = function(){
        //  $http.get('data.json').success(function(data){
        //     $scope.productOwned = data;
        return "Already bought " + $scope.productOwned.length + " products";
        //});        
    }

    $scope.showPurchaseForms = function(){
    	$scope.showPurchaseForm = true;
        $scope.showPurchaseButton = false;
    }

    $scope.showPurchaseNow = function(){
        if ($scope.productName == ""){
            alert("Please enter Product Name");
        }
        else if($scope.productCatalog == ""){
            alert("Please choose Product catalog");
        }
        else{
        var today = new Date();
           $scope.productOwned.push(
            {
                "name":$scope.productName, 
                "catalog":$scope.productCatalog.catalog, 
                "price":$scope.productPrice, 
                "dateofpurchase":today
            });
            $scope.showPurchaseForm = false;
            $scope.showPurchaseButton = true;
        }
    }

    $scope.cancelPurchase = function(){
        $scope.showPurchaseForm = false;
        $scope.showPurchaseButton = true;
    }
}]);

