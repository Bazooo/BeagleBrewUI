import React from 'react';
import BrewAsset from './BrewAsset';

export default class Heater extends BrewAsset {
    getFluidClass() {
        return;
    }
    render() {
        const assetClass = "heater";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <rect x="10" y="10" width="30" height="30"/>
                <g className="heater-icon">
                    <path className="heater-vapor" d="M17,32.5c0-2.5,2-2.5,2-5s-2-2.5-2-5,2-2.5,2-5"/>
                    <path className="heater-vapor" d="M24,32.5c0-2.5,2-2.5,2-5s-2-2.5-2-5,2-2.5,2-5"/>
                    <path className="heater-vapor" d="M31,32.5c0-2.5,2-2.5,2-5s-2-2.5-2-5,2-2.5,2-5"/>
                </g>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
