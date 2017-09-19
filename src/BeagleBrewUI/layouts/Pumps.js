export default {
    cols: {
        id: {
            editable: false
        },
        status: {
            type: "enum",
            enumKeys: [
                -1,
                0,
                1
            ],
            enumVals: [
                "Erreur",
                "Fermé",
                "Ouvert"
            ]
        }
    }
};