sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/cap/movements/appmovements/test/integration/pages/MovementsList",
	"br/com/cap/movements/appmovements/test/integration/pages/MovementsObjectPage"
], function (JourneyRunner, MovementsList, MovementsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/cap/movements/appmovements') + '/test/flp.html#app-preview',
        pages: {
			onTheMovementsList: MovementsList,
			onTheMovementsObjectPage: MovementsObjectPage
        },
        async: true
    });

    return runner;
});

