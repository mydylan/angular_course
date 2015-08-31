app.directive("productPanels", function() {
    return {
        restrict: "E",
        templateUrl: "src/views/product-panels.html",
        controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function(setTab) {
                this.tab = setTab;
            };
        },
        controllerAs: 'tab'
    };
});