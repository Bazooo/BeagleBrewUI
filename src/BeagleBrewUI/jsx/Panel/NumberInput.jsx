import TextInput from "./TextInput";

class NumberInput extends TextInput {
    /**
     * Checks if there is an error with the value
     * @param   {Val}       val     Value to check
     * @return  {boolean}           True if no error
     */
    checkErrors(val) {
        return (/^\d+$/).test(val);
    }
}

export default NumberInput;
