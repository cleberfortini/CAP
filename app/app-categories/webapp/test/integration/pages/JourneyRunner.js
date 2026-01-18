sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/cap/category/appcategories/test/integration/pages/CategoriesList",
	"br/com/cap/category/appcategories/test/integration/pages/CategoriesObjectPage"
], function (JourneyRunner, CategoriesList, CategoriesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/cap/category/appcategories') + '/test/flp.html#app-preview',
        pages: {
			onTheCategoriesList: CategoriesList,
			onTheCategoriesObjectPage: CategoriesObjectPage
        },
        async: true
    });

    return runner;
});

