app.controller("myCtrl", ['$scope', '$http',function($scope,$http) {
    $scope.productName = "";
    $scope.productPrice = 0;
    $scope.productCatalog = "";
    $scope.productOwnedSummary = "";
    $scope.purchaseDate = "";
    //productOwned need to read file json file
    $scope.productOwned = [
        {"name":"La Mer Eye Concentrate", "catalog":"Skincare / Eye", "price":"180", "dateofpurchase":"2017/03"}, 
        {"name":"Cle De Peau Correcting Cream Veil", "catalog":"Cosmetics / Face", "price":"70", "dateofpurchase":"2017/03"},
	    {"name":"Laura Mercier Pressed Powder", "catalog":"Cosmetics / Face", "price":"56", "dateofpurchase":"2017/03"},
        {"name":"Giorgio Armani Eyeshaper", "catalog":"Cosmetics / Tool", "price":"25", "dateofpurchase":"2017/03"},
        {"name":"Marc Jacobs Matte Eyeliner", "catalog":"Cosmetics / Eye", "price":"20", "dateofpurchase":"2017/03"},
        {"name":"Fresh Deep Hydration Facial Toner", "catalog":"Skincare / Face", "price":"40", "dateofpurchase":"2017/04"}, 
	    {"name":"Nars Dual-intensity Eyeshadow", "catalog":"Cosmetics / Eye", "price":"26", "dateofpurchase":"2017/04"} , 
	    {"name":"givenchy ink fundation", "catalog":"Cosmetics / Face", "price":"60", "dateofpurchase":"2017/04"} , 
	    {"name":"Sephora Colorful Face Powders", "catalog":"Cosmetics / Face", "price":"14", "dateofpurchase":"2017/04"} 
    ];
    $scope.productOwnedCharData = [{
        name: 'cosmetics / Eye',
        data: [0, 0, 20, 26, 0, 0, 0, 0, 0, 0, 0, 0],
        stack: 'Cosmetics'
        },{
        name: 'Cosmetics / Face',
        data: [0, 0, 126, 74, 0, 0, 0, 0, 0, 0, 0, 0],
        stack: 'Cosmetics'
        }, {
        name: 'Cosmetics / Tool',
        data: [0, 0, 25, 74, 0, 0, 0, 0, 0, 0, 0, 0],
        stack: 'Cosmetics'
        },{
        name: 'Skincare / Face',
        data: [0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0],
        stack: 'Skincare'
        }, {
        name: 'Skincare / Eye',
        data: [0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        stack: 'Skincare'
    }];
    
    $scope.showPurchaseForm = false;
    $scope.showPurchaseButton = true;

    //scope functions
    $scope.init = function(){
        //  $http.get('data.json').success(function(data){
        //     $scope.productOwned = data;
        $scope.productOwnedSummary =  "Already bought " + $scope.productOwned.length + " products";
        //});  
        drawHighChart($scope.productOwnedCharData);       
    }

    $scope.showPurchaseForms = function(){
    	$scope.showPurchaseForm = true;
        $scope.showPurchaseButton = false;
    }

    $scope.addPurchase = function(){
        if ($scope.productName == ""){
            alert("Please enter Product Name");
        }
        else if($scope.productCatalog == ""){
            alert("Please choose Product catalog");
        }
        else if(!isValidDate($scope.purchaseDate)){
            alert("Please enter a valid date");
            $scope.purchaseDate = "";
        }
        else{
        console.log($scope.purchaseDate);
           $scope.productOwned.push(
            {
                "name":$scope.productName, 
                "catalog":$scope.productCatalog.catalog, 
                "price":$scope.productPrice, 
                "dateofpurchase":$scope.purchaseDate
            });
            $scope.showPurchaseForm = false;
            $scope.showPurchaseButton = true;

            resetForm();
            
            // new data needs to be added to productOwnedCharData
            drawHighChart($scope.productOwnedCharData);
        }       
    }

    $scope.cancelPurchase = function(){
        $scope.showPurchaseForm = false;
        $scope.showPurchaseButton = true;
        resetForm();
    }

    //helper functions
    function resetForm(){
        $scope.productName = "";
        $scope.productPrice = 0;
        $scope.productCatalog = "";
        $scope.productReview = "";
    }

    function isValidDate(date){
        if (date == "") return false;
        var res = date.split("/");
        if (res.length != 2) return false;
        var year = parseInt(res[0]);
        if (year != (new Date()).getFullYear()) return false;
        var month = parseInt(res[1]);
        if (month <1 || month > 12) return false;
        return true;       
    }

    function drawHighChart(data){
        var chartInfo = {
            chart: {
                type: 'column'
            },
            title: { text: 'Total expense, grouped by catalog'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {  text: 'Expense ($)' }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: { stacking: 'normal' }
            }
        };
        chartInfo.series = data;

        $('#chartContainer').highcharts(chartInfo);
    }

    $scope.init();
}]);
