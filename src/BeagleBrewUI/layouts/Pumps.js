import * as BrewGridActions from "../actions/BrewGridActions";

export default {
    cols: {
        id: {label: "Id: "},
        status: {
            type: "enum",
            enumKeys: [
                -1,
                0,
                1,
            ],
            enumVals: [
                "Erreur",
                "Fermé",
                "Ouvert",
            ],
            editable: true,
            onChange: BrewGridActions.toggleAsset.bind(BrewGridActions),
            label: "Status: ",
        },
    },
};
