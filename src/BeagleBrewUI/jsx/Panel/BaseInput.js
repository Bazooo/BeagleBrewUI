import {Component} from "react";

class BaseInput extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            val: props.val,
        });
    }

    componentWillReceiveProps(props) {
        // console.log(props)
        this.setState({
            val: props.val,
        });
    }

    throwError() {
        alert("A not coded error message should appear");
    }

    /**
     * Checks if there is an error with the value
     * @param   {Val}       val     Value to check
     * @return  {boolean}           True if no error
     */
    checkErrors() {
        return true;
    }

    emitChange(value) {
        if (this.props.layout.onChange && typeof this.props.layout.onChange === "function") {
            if (value.toString() !== this.state.val.toString()) {
                if(this.checkErrors(value)) {
                    this.setState({
                        val: value,
                    });
                    this.props.layout.onChange(this.props.id,this.props.rKey, value);
                    this.forceUpdate();
                } else {
                    this.throwError();
                }
            }
        }
    }

    //TODO : Add the ids for htmlFor and ids
}

export default BaseInput;
