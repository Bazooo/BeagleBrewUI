import BaseInput from "./BaseInput";
import React from "react";

export default class EnumInput extends BaseInput {
    constructor(props) {
        super(props);
        this.state = {
            val: props.val,
            show: false,
        };
    }

    changeVal(i) {
        this.emitChange(this.props.layout.enumKeys[i]);
        this.hideOptions();
    }

    searchValue() {
        for (let i = 0; i < this.props.layout.enumKeys.length && i < this.props.layout.enumVals.length; i++) {
            if(this.props.val === this.props.layout.enumKeys[i]) {
                return this.props.layout.enumVals[i];
            }
        }
    }

    toggleOptions() {
        this.setState((prevState) => ({
            show: !prevState.show,
        }));
    }

    hideOptions() {
        this.setState({
            show: false,
        });
    }

    showOptions() {
        this.setState({
            show: true,
        });
    }

    render() {
        let icon = "content-icon"; //TODO icons
        const value = this.searchValue();
        let content = (
            <span className={"content-data text-input" + icon} data-label={this.props.layout.label}>{value}</span>
        );

        if(this.props.layout.editable) {
            let tabs = this.props.layout.enumVals.map((enumVal, i) =>
                <span className="option" key={i} onClick={() => this.changeVal(i)}>{enumVal}</span>
            );

            let options = (
                <div className="options-container">
                    {tabs}
                </div>
            );

            let showOptionsClass = this.state.show ? "open " : "";

            content = (
                <div className={"content-data enum-input " + showOptionsClass + icon}
                    data-label={this.props.layout.label}
                    onBlur={this.hideOptions.bind(this)}
                    tabIndex="0">
                    <span className="current-value" onClick={this.toggleOptions.bind(this)}>{value}</span>
                    {options}
                </div>
            );
        }

        return content;
    }
}
