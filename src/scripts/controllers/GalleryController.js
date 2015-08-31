app.controller("GalleryController", function () {
	this.current = 0;

	this.setCurrent = function (val) {
		this.current = val || 0;
	};
});