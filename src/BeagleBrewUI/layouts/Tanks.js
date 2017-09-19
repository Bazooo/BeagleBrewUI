

export default {
    cols: {
        id: {
            editable: false
        },
        sensorStatus: {
            type: "enum",
            enumKeys: [
                0,
                1,
                2
            ],
            enumVals: [
                "Connexion fautive",
                "Connexion correct",
                "Valeurs anormales"
            ],
            editable: false
        },
        controllerStatus: {
            type: "enum",
            enumKeys: [
                0,
                1
            ],
            enumVals: [
                "Non-asservi",
                "Asservi"
            ],
            editable: false
        },
        setTemp: {
            type: "number",
            unitType: "temperature"
        },
        currentTemp: {
            type: "number",
            unitType: "temperature"
        }
    }
};