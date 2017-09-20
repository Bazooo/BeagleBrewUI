import React from 'react';
import BrewAsset from './BrewAsset';

export default class DefaultTube extends BrewAsset {
    render() {
        const assetClass = "default-tube";
        const assetCode =
            <svg viewBox="0 0 50 50">
                <line className="tube" y1="25" x2="50" y2="25"/>
            </svg>;
        return super.render(assetCode, assetClass, true);
    }
}
