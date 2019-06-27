



app.controller('HomeController', ['HomeService', '$location', '$scope', '$rootScope', '$cookieStore', '$filter',
    function (HomeService, $location, $scope, $rootScope, $cookieStore, $filter) {




        $scope.getIWSR = function () {

            $scope.user = {};
            $scope.wasSubmitted = false;
          
            $scope.IsVisible = $scope.IsVisible = true;

           // alert( $scope.IsVisible = $scope.IsVisible = true)


            console.log($scope.datefilter.fromdate);
            console.log($scope.datefilter.department);
        
         
            HomeService.getIWSR($scope.datefilter.fromdate, $scope.datefilter.department, $scope.datefilter).then(function (response) {
              
                console.log(response)
                
                $scope.iwsrdata = response.data;
                $location.path('/home')
                $scope.IsVisible = $scope.IsVisible = false;

             
                $scope.Export = function () {
                    $("#tbliwsr").table2excel({
                        filename: "IWSR"+$scope.datefilter.fromdate+".xls"
                    });
                }

                // $scope.createcsv = function () {
                //     JSONToCSVConvertor($scope.items1, $scope.datefilter.fromdate, true);
                // }



                // function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
                //     //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
                //     var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

                //     var CSV = '';
                //     //Set Report title in first row or line

                //     CSV += ReportTitle + '\r\n\n';

                //     //This condition will generate the Label/Header
                //     if (ShowLabel) {
                //         var row = "";

                //         //This loop will extract the label from 1st index of on array
                //         for (var index in arrData[0]) {
                //           if(index=="1")
                //           {
                //               console.log(index);
                              
                //               var billid='BILLEDID'
                            
                //               console.log("true in String");
                              
                //           }
                //           else
                //           {
                //               console.log("index 1 false");
                              
                //           }
                //           if(index==1)
                //           {
                //               console.log("true in int");
                              
                //           }
                          
                //           else
                //           {
                //               console.log("index 1 false");
                              
                //           }
                //             row += index + ',';

                //         }



                //         row = row.slice(0, -1);

                //         console.log("row.slice : "+row);

                //         CSV += row + '\r\n';
                //         console.log("CSV : "+CSV);
                        

                //     }


                //     //1st loop is to extract each row
                //     for (var i = 0; i < arrData.length; i++) {
                //         var row = "";

                //         //2nd loop will extract each column and convert it in string comma-seprated
                //         for (var index in arrData[i]) {
                //             row += '"' + arrData[i][index] + '",';
                //             console.log("row 2nd loop: "+row);
                            
                //         }

                //         // console.log("index : "+index);
                //         // console.log("i : "+i);


                //         row.slice(0, row.length - 1);

                //         //add a line break after each row
                //         CSV += row + '\r\n';
                //         console.log("csv : 79"+CSV);
                        
                //     }

                //     if (CSV == '') {
                //         alert("Invalid data");
                //         return;
                //     }

                //     //Generate a file name
                //     var fileName = "iwsr_";
                //     //this will remove the blank-spaces from the title and replace it with an underscore
                //     fileName += ReportTitle.replace(/ /g, "_");

                //     //Initialize file format you want csv or xls
                //     var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

                //     // Now the little tricky part.
                //     // you can use either>> window.open(uri);
                //     // but this will not work in some browsers
                //     // or you will not get the correct file extension    

                //     //this trick will generate a temp <a /> tag
                //     var link = document.createElement("a");
                //     link.href = uri;

                //     //set the visibility hidden so it will not effect on your web-layout
                //     link.style = "visibility:hidden";
                //     link.download = fileName + ".csv";

                //     //this part will append the anchor tag and remove it after automatic click
                //     document.body.appendChild(link);
                //     link.click();
                //     document.body.removeChild(link);
                // }
                // $scope.sortingOrder = sortingOrder;
                // $scope.reverse = false;
                // $scope.filteredItems = [];
                // $scope.groupedItems = [];
                // $scope.itemsPerPage = 100;
                // $scope.pagedItems = [];
                // $scope.currentPage = 0;
                // $scope.items = response.data;

                // var searchMatch = function (haystack, needle) {
                //     if (!needle) {
                //         return true;
                //     }
                //     return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
                // };

                // // init the filtered items
                // $scope.search = function () {
                //     $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                //         for (var attr in item) {
                //             if (searchMatch(item[attr], $scope.searchtext))
                //                 return true;
                //         }
                //         return false;
                //     });
                //     // take care of the sorting order
                //     if ($scope.sortingOrder !== '') {
                //         $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
                //     }
                //     $scope.currentPage = 0;
                //     // now group by pages
                //     $scope.groupToPages();
                // };

                // // calculate page in place
                // $scope.groupToPages = function () {
                //     $scope.pagedItems = [];

                //     for (var i = 0; i < $scope.filteredItems.length; i++) {
                //         if (i % $scope.itemsPerPage === 0) {
                //             $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
                //         } else {
                //             $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                //         }
                //     }
                // };

                // $scope.range = function (start, end) {
                //     var ret = [];
                //     if (!end) {
                //         end = start;
                //         start = 0;
                //     }
                //     for (var i = start; i < end; i++) {
                //         ret.push(i);
                //     }
                //     return ret;
                // };

                // $scope.prevPage = function () {
                //     if ($scope.currentPage > 0) {
                //         $scope.currentPage--;
                //     }
                // };

                // $scope.nextPage = function () {
                //     if ($scope.currentPage < $scope.pagedItems.length - 1) {
                //         $scope.currentPage++;
                //     }
                // };

                // $scope.setPage = function () {
                //     $scope.currentPage = this.n;
                // };

                // // functions have been describe process the data for display
                // $scope.search();

                // // change sorting order
                // $scope.sort_by = function (newSortingOrder) {
                //     if ($scope.sortingOrder == newSortingOrder)
                //         $scope.reverse = !$scope.reverse;

                //     $scope.sortingOrder = newSortingOrder;

                //     // icon setup
                //     $('th i').each(function () {
                //         // icon reset
                //         $(this).removeClass().addClass('icon-sort');
                //     });
                //     if ($scope.reverse)
                //         $('th.' + new_sorting_order + ' i').removeClass().addClass('icon-chevron-up');
                //     else
                //         $('th.' + new_sorting_order + ' i').removeClass().addClass('icon-chevron-down');
                // };

            }
            
            )
           
        }
     
    }
])
