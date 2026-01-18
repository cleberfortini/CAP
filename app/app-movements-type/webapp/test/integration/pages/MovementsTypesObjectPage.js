sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.cap.movements.types.appmovementstype',
            componentId: 'MovementsTypesObjectPage',
            contextPath: '/MovementsTypes'
        },
        CustomPageDefinitions
    );
});