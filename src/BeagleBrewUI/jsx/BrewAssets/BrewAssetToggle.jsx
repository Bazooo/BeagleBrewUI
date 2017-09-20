import * as BrewGridActions from "../../actions/BrewGridActions";
import BrewAssetClickable from "./BrewAssetClickable";

export default class BrewAssetToggle extends BrewAssetClickable {
    isActive() {
        return !!this.props.status.status;
    }
    clickHandler() {
        let data = this.props.data;
        BrewGridActions.toggleAsset(data.id);
    }
}
