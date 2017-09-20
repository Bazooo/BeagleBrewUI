import React, {Component} from "react";
import DefaultTube from "./BrewAssets/DefaultTube";
import CurvedTube from "./BrewAssets/CurvedTube";
import TConnectorTube from "./BrewAssets/TConnectorTube";
import IntersectionTube from "./BrewAssets/IntersectionTube";
import InputTube from "./BrewAssets/InputTube";
import OutputTube from "./BrewAssets/OutputTube";
import Coil from "./BrewAssets/Coil";
import Heater from "./BrewAssets/Heater";
import Cooler from "./BrewAssets/Cooler";
import Pump from "./BrewAssets/Pump";
import Valve from "./BrewAssets/Valve";
import Shower from "./BrewAssets/Shower";

export default class BrewAssetSquare extends Component {
    render() {
        let asset;
        if (this.props.assetData) {
            const assetData = this.props.assetData;
            let fluid = this.props.fluid;
            let status = this.props.status;
            switch (this.props.assetData.assetId) {
                case "t1":
                    asset = <DefaultTube fluid={fluid} data={assetData}/>;
                    break;
                case "t2":
                    asset = <CurvedTube fluid={fluid} data={assetData}/>;
                    break;
                case "t3":
                    asset = <TConnectorTube fluid={fluid} data={assetData}/>;
                    break;
                case "t4":
                    asset = <IntersectionTube fluid={fluid} data={assetData}/>;
                    break;
                case "in":
                    asset = <InputTube fluid={fluid} data={assetData}/>;
                    break;
                case "out":
                    asset = <OutputTube fluid={fluid} data={assetData}/>;
                    break;
                case "coil":
                    asset = <Coil fluid={fluid} data={assetData}/>;
                    break;
                case "heat":
                    asset = <Heater data={assetData}/>;
                    break;
                case "cool":
                    asset = <Cooler fluid={fluid} data={assetData}/>;
                    break;
                case "pump":
                    asset = <Pump status={status} fluid={fluid} data={assetData}/>;
                    break;
                case "valv":
                    asset = <Valve status={status} fluid={fluid} data={assetData}/>;
                    break;
                case "show":
                    asset = <Shower fluid={fluid} data={assetData}/>;
                    break;
                default:
                //null
            }
        }

        return (
            <div className="beagleBrewGrid-square">
                {asset}
            </div>
        );
    }
}
