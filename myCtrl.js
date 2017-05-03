app.controller("myCtrl", ['$scope', '$http',function($scope,$http) {
    $scope.productName = "";
    $scope.productPrice = 0;
    $scope.productCatalog = "";
    $scope.productReview = "";

    //productOwned need to read file json file
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
        resetForm();
    }

    $scope.cancelPurchase = function(){
        $scope.showPurchaseForm = false;
        $scope.showPurchaseButton = true;
        resetForm();
    }

    $scope.drawChart = function(){
        var chartInfo = {
            chart: {
            type: 'column'
            },

            title: {
                text: 'Total expense, grouped by catalog'
            },

            xAxis: {
                categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                crosshair: true
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Expense ($)'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'cosmetics / eye',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                stack: 'cosmetics'
                },{
                name: 'cosmetics / face',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                stack: 'cosmetics'
            }, {
                name: 'skin care / face',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
                stack: 'skin care'
            }
            , {
                name: 'skin care / eye',
                data: [83.6, 0, 98.5, 93.4, 106.0, 84.5, 10.5, 5, 91.2, 83.5, 106.6, 70],
                stack: 'skin care'
            }]
        };
        $('#chartContainer').highcharts(chartInfo);
    }

    function resetForm(){
        $scope.productName = "";
        $scope.productPrice = 0;
        $scope.productCatalog = "";
        $scope.productReview = "";
    }
}]);

