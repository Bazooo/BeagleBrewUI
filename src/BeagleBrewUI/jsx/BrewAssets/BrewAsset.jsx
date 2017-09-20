import React, {Component} from "react";

export default class BrewAsset extends Component {
    getAssetStatusClass() {
        let status = this.isActive() ? " active" : "";

        let fluid = this.getFluidClass();
        return status + fluid;
    }

    isActive() {
        return false;
    }

    getFluidClass() {
        let assetFluid = this.props.fluid;
        let fluid = assetFluid.fluid ? " fluid" : "";
        let fluidA = assetFluid.fluidA ? " fluid-a" : "";
        let fluidB = assetFluid.fluidB ? " fluid-b" : "";
        let fluidC = assetFluid.fluidC ? " fluid-c" : "";
        let liquid = assetFluid.liquid ? " liquid-" + assetFluid.liquid : "";
        let liquidA = assetFluid.liquidA ? " liquidA-" + assetFluid.liquidA : "";
        let liquidB = assetFluid.liquidB ? " liquidB-" + assetFluid.liquidB : "";
        let liquidC = assetFluid.liquidC ? " liquidC-" + assetFluid.liquidC : "";
        return fluid + fluidA + fluidB + fluidC + liquid + liquidA + liquidB + liquidC;
    }

    getClass(assetClass, hasRotation) {
        const baseClass = "brew-asset";
        assetClass = " " + assetClass;
        const rotationClass = hasRotation ? " r" + this.props.data.rotation : "";
        let statusClass = this.getAssetStatusClass();
        let elemClass = baseClass + assetClass + rotationClass + statusClass;
        return elemClass;
    }

    render(assetCode, assetClass, hasRotation) {
        return (
            <div className={this.getClass(assetClass, hasRotation)}>
                {assetCode}
            </div>
        );
    }
}
