import React from 'react';
import BrewAssetToggle from './BrewAssetToggle';

export default class Valve extends BrewAssetToggle {
    render() {
        const assetClass = "valve";
        const assetCode =
            <div>
                <svg viewBox="0 0 50 50">
                    <line className="tube-a tube" y1="25" x2="10" y2="25"/>
                    <line className="tube-b tube" x1="40" y1="25" x2="50" y2="25"/>
                </svg>
                <svg viewBox="0 0 50 50" className="valve-icon">
                    <g>
                        <circle cx="25" cy="25" r="15"/>
                        <path d="M31.27,21.46a5,5,0,0,1,0,7.07"/>
                        <path d="M18.73,28.54a5,5,0,0,1,0-7.07"/>
                    </g>
                    <line className="tube-c tube" x1="25" y1="8.5" x2="25" y2="41.5"/>
                </svg>
            </div>;
        return super.render(assetCode, assetClass, true);
    }
}
