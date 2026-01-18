using cap.schema from '../db/schema';

service movementsTypes {

    @UI: {
        SelectionFields : [description],
        LineItem        : [{
            Value: description,
            Label: 'Descrição'
        }, ],
        Facets          : [{
            $Type : 'UI.ReferenceFacet',
            Label : 'Detalhes da Categoria',
            Target: '@UI.FieldGroup#Main'
        }],
        FieldGroup #Main: {Data: [{
            Value: description,
            Label: 'Descrição'
        }]}
    }
    entity MovementsTypes @(Capabilities: {
        InsertRestrictions: {
            $Type: 'Capabilities.InsertRestrictionsType',
            Insertable
        },
        UpdateRestrictions: {
            $Type: 'Capabilities.UpdateRestrictionsType',
            Updatable
        },
        DeleteRestrictions: {
            $Type: 'Capabilities.DeleteRestrictionsType',
            Deletable
        },
    }) as projection on schema.MovementType;

    annotate MovementsTypes with @odata.draft.enabled;
}