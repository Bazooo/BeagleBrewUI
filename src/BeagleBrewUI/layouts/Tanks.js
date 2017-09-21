import * as BrewGridActions from "../actions/BrewGridActions";

export default {
    cfg: {
        skipEmptyData: true,
    },
    cols: {
        id: {label: "Id: "},
        sensorStatus: {
            label: "Sensor : ",
            type: "enum",
            enumKeys: [
                0,
                1,
                2,
            ],
            enumVals: [
                "Connexion fautive",
                "Connexion correct",
                "Valeurs anormales",
            ],
        },
        controllerStatus: {
            label: "Controller: ",
            type: "enum",
            enumKeys: [
                0,
                1,
            ],
            enumVals: [
                "Non-asservi",
                "Asservi",
            ],
            editable: true,
            onChange: BrewGridActions.changeTemp.bind(BrewGridActions),
        },
        setTemp: {
            label: "Set temp: ",
            type: "number",
            unitType: "temperature",
            editable: true,
            onChange: BrewGridActions.changeTemp.bind(BrewGridActions),
        },
        currentTemp: {
            label: "Current temp: ",
            type: "number",
            unitType: "temperature",
        },
    },
};
