import React from "react";
import BrewAssetClickable from "./BrewAssetClickable";

export default class Tank extends BrewAssetClickable {
    getAssetStatusClass() {
        return "";
    }
    render() {
        const assetClass = "tank";
        let grid = this.props.grid;
        let data = this.props.data;
        const width = 100 / grid.width * data.width;
        const height = 100 / grid.height * data.height;
        const x = "calc((100%/" + grid.width + "*" + data.x + ") - 5px)";
        const y = "calc((100%/" + grid.height + "*" + data.y + ") - 5px)";

        let assetCode =
            <div className="tank">
                <div className="labels">
                    <span className="currentTemp">{this.props.status.currentTemp}</span>
                    <span className="setTemp">{this.props.status.setTemp}</span>
                </div>
                <span className="fluid"></span>

            </div>;

        return (
            <div className={this.getClass(assetClass, false)} onClick={this.clickHandler} style={{width: width + "%", height: height + "%", left: x, top: y}} data-id={this.props.data.id}>
                {assetCode}
            </div>
        );
    }
}
