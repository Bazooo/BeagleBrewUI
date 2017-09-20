import React from 'react';
import BrewAsset from './BrewAsset';

export default class InputTube extends BrewAsset {
    render() {
        const assetClass = "input-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" x1="35" y1="25" x2="50" y2="25"/>
                <g>
                    <polyline points="26.14 17.5 35 17.5 35 32.5 26.14 32.5"/>
                    <path d="M15.89,30c.63,2.87,1.84,5,3.64,5a10,10,0,0,0,0-20c-1.8,0-3,2.13-3.64,5"/>
                </g>
                <g className="arrow">
                    <line x1="20.7" y1="28.6" x2="24.24" y2="25.07"/>
                    <line x1="20.7" y1="21.53" x2="24.24" y2="25.07"/>
                    <line x1="24.24" y1="25.07" x2="12.35" y2="25.07"/>
                </g>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
