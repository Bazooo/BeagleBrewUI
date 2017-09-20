import BaseInput from "./BaseInput";
import * as React from "react";
import units from '../../../exampleDB/units.json';

class NumberInput extends BaseInput {
    constructor(props) {
        super(props);
    }

    render() {
        let unit = units[this.props.layout.unitType];
        return (
            <div>
                <label htmlFor="">{this.props.layout.label}</label>
                <span className="content-data" data-unit={unit}>
                    <input id="" type="number" value={this.state.val}
                           onChange={this.onChange.bind(this)} disabled={!this.props.layout.editable}/>
                </span>
            </div>
        );
    }
}

export default NumberInput;