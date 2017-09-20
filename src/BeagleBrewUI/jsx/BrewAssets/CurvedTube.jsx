import React from "react";
import BrewAsset from "./BrewAsset";

export default class CurvedTube extends BrewAsset {
    render() {
        const assetClass = "curved-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <polyline className="tube" points="0 25 25 25 25 50"/>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
