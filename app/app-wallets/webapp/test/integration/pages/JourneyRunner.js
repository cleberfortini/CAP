sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/cap/carteiras/appwallets/test/integration/pages/WalletsList",
	"br/com/cap/carteiras/appwallets/test/integration/pages/WalletsObjectPage"
], function (JourneyRunner, WalletsList, WalletsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/cap/carteiras/appwallets') + '/test/flp.html#app-preview',
        pages: {
			onTheWalletsList: WalletsList,
			onTheWalletsObjectPage: WalletsObjectPage
        },
        async: true
    });

    return runner;
});

