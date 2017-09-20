import React from 'react';
import BrewAsset from './BrewAsset';

export default class Coil extends BrewAsset {
    render() {
        const assetClass = "coil";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" x1="17.5" y1="40" x2="22.5" y2="10"/>
                <line className="tube" x1="27.5" y1="40" x2="32.5" y2="10"/>
                <polyline className="tube" points="37.5 40 42.5 10 45 25"/>
                <polyline className="tube" points="5 25 7.5 40 12.5 10"/>
                <line className="tube" x1="5" y1="25" y2="25"/>
                <line className="tube" x1="45" y1="25" x2="50" y2="25"/>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
