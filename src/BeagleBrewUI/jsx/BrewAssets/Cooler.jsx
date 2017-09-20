import React from "react";
import BrewAsset from "./BrewAsset";

export default class Cooler extends BrewAsset {
    getFluidClass() {
        let assetFluid = this.props.fluid;
        let activeClass = assetFluid.fluidA && assetFluid.fluidB ? " active" : "";
        return super.getFluidClass() + activeClass;
    }

    render() {
        const assetClass = "cooler";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <g className="cooler-icon">
                    <polyline points="21.79 14.92 25 18.75 28.21 14.92"/>
                    <polyline points="28.21 35.08 25 31.25 21.79 35.08"/>
                    <polyline points="14.66 22.74 19.59 21.88 17.88 17.18"/>
                    <polyline points="35.34 27.26 30.41 28.13 32.12 32.82"/>
                    <polyline points="17.88 32.82 19.59 28.13 14.66 27.26"/>
                    <polyline points="32.12 17.18 30.41 21.88 35.34 22.74"/>
                    <polyline points="25 12.5 25 25 25 37.5"/>
                    <polyline points="14.18 18.75 25 25 35.83 31.25"/>
                    <polyline points="14.18 31.25 25 25 35.83 18.75"/>
                </g>
                <line className="tube-b" x1="25" y1="10" x2="25"/>
                <line className="tube-b" x1="25" y1="40" x2="25" y2="50"/>
                <line className="tube-a" x1="40" y1="25" x2="50" y2="25"/>
                <line className="tube-a" x1="10" y1="25" y2="25"/>
                <rect x="10" y="10" width="30" height="30"/>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
