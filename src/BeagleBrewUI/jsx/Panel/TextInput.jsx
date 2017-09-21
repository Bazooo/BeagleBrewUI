import BaseInput from "./BaseInput";
import React from "react";
import units from "../../../exampleDB/units.json";

export default class TextInput extends BaseInput {
    render() {
        let unit = units[this.props.layout.unitType];
        let icon = "icon-class"; // TODO : icons[this.props.layout.unitType];
        let content = (
            <span className={"content-data text-input" + icon} data-label={this.props.layout.label} data-unit={unit}>{this.props.val}</span>
        );
        if(this.props.layout.editable) {
            content = (
                <span className={"content-data text-input" + icon}
                    data-label={this.props.layout.label}
                    data-unit={unit}
                    onBlur={(e)=>this.emitChange(e.target.innerHTML)}
                    contentEditable
                    suppressContentEditableWarning="true">{this.props.val}</span>
            );
        }

        return content;
    }
}
