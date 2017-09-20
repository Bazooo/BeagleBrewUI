import React from "react";
import BrewAsset from "./BrewAsset";

export default class TConnectorTube extends BrewAsset {
    render() {
        const assetClass = "t-connector-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" y1="25" x2="50" y2="25"/>
                <line className="tube" x1="25" y1="25" x2="25" y2="50"/>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
