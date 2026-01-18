sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/cap/movements/types/appmovementstype/test/integration/pages/MovementsTypesList",
	"br/com/cap/movements/types/appmovementstype/test/integration/pages/MovementsTypesObjectPage"
], function (JourneyRunner, MovementsTypesList, MovementsTypesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/cap/movements/types/appmovementstype') + '/test/flp.html#app-preview',
        pages: {
			onTheMovementsTypesList: MovementsTypesList,
			onTheMovementsTypesObjectPage: MovementsTypesObjectPage
        },
        async: true
    });

    return runner;
});

