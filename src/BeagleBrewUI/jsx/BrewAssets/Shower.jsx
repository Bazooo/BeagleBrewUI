import React from 'react';
import BrewAsset from './BrewAsset';

export default class Shower extends BrewAsset {
    render() {
        const assetClass = "shower";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" x1="25" y1="15" x2="25"/>
                <g className="shower-icon">
                    <path d="M37.5,27.5c0,6.9-25,6.9-25,0a12.5,12.5,0,0,1,25,0Z"/>
                    <line x1="12.5" y1="27.5" x2="37.5" y2="27.5"/>
                </g>
            </svg>;
        return super.render(assetCode, assetClass, false);
    }
}
