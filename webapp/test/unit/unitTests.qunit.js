/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"be/soapeople/diami/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});