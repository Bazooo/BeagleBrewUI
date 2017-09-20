import React from "react";
import BrewAsset from "./BrewAsset";

export default class IntersectionTube extends BrewAsset {
    render() {
        const assetClass = "intersection-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube-b tube" x1="25" x2="25" y2="50"/>
                <g>
                    <line className="tube-a tube" y1="25" x2="18" y2="25"/>
                    <line className="tube-a tube" x1="32" y1="25" x2="50" y2="25"/>
                </g>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
