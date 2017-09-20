import React from "react";
import BrewAsset from "./BrewAsset";

export default class OutputTube extends BrewAsset {
    render() {
        const assetClass = "output-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" y1="25" x2="20" y2="25"/>
                <g>
                    <line x1="25" y1="32.5" x2="25" y2="17.5"/>
                    <line x1="20" y1="30" x2="20" y2="20"/>
                </g>
                <g className="arrow">
                    <line x1="38.35" y1="28.54" x2="41.89" y2="25"/>
                    <line x1="38.35" y1="21.46" x2="41.89" y2="25"/>
                    <line x1="41.89" y1="25" x2="30" y2="25"/>
                </g>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
