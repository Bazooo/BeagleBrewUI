import React from 'react';
import BrewAssetClickable from './BrewAssetClickable';

export default class Tank extends BrewAssetClickable {
    getAssetStatusClass() {
        return "";
    }
    render() {
        const assetClass = "tank";
        var grid = this.props.grid;
        var data = this.props.data;
        const width = 100 / grid.width * data.width;
        const height = 100 / grid.height * data.height;
        const x = "calc((100%/" + grid.width + "*" + data.x + ") - 5px)";
        const y = "calc((100%/" + grid.height + "*" + data.y + ") - 5px)";

        var assetCode =
            <div className="tank">
                <span className="fluid" data-temp={this.props.data.prop.currentTemp}></span>
            </div>;

        return (
            <div className={this.getClass(assetClass, false)} onClick={this.clickHandler} style={{width: width + "%", height: height + "%", left: x, top: y}}>
                {assetCode}
            </div>
        );
    }
}
