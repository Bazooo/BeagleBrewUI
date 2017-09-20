import React from "react";
import * as BrewGridActions from "../../actions/BrewGridActions";
import BrewAsset from "./BrewAsset";

export default class BrewAssetClickable extends BrewAsset {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        // const prop = props.data.prop;
        this.state = {
            data: props.data,
            active: false,
            flowingData: false,
        };
    }

    clickHandler() {
        BrewGridActions.requestDataFlow(this.props.data.id);
    }

    getClass(assetClass, hasRotation) {
        const clickableClass = " clickable";
        return super.getClass(assetClass, hasRotation) + clickableClass;
    }

    render(assetCode, assetClass, hasRotation) {
        return (
            <div className={this.getClass(assetClass, hasRotation)} onClick={this.clickHandler} data-id={this.props.data.id}>
                {assetCode}
            </div>
        );
    }
}
