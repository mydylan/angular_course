app.directive("productGallery", function () {
	return {
		restrict: 'E',
		templateUrl: 'src/views/product-gallery.html',
		controller: function() {
			this.current = 0;

			this.setCurrent = function (val) {
				this.current = val || 0;
			};
		},
		controllerAs: 'gallery'
	};
});