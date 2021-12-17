// Validate
const validator = {
    // Validator
    isEmpty: (value) => value.length === 0 || !value.trim(),
    isNull: (value) => value === undefined || value === null,
    minLength: (n, value) => value.length < n,
    maxLength: (n, value) => value.length > n,
    regex: (regex, value) => regex.test(value),
    email: (email) => email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),

    // Extractors
    getValueInput: (input_name) => $('input[name="' + input_name + '"]').val(),
    getValueSelect: (input_name) => $('select[name="' + input_name + '"]').val(),
    getChecked: (input_name) => $('input[name="' + input_name + '"]').checked,

    // Utils
    validate: (expresion, element) => {
        if (expresion) {
            $(element).show();
            return true;
        }
        $(element).hide();
        return false;
    }
};