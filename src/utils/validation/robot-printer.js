import * as Yup from "yup";

const validationText = {
    number: "Must be a number",
    integer: "Must be and integer",
    biggerThan: "Must be bigger than 1",
    required: "Required"
}

export const robotValidation = Yup.object().shape({
    startNum: Yup
        .number(validationText.number)
        .integer(validationText.integer)
        .min(1, validationText.biggerThan)
        .required(validationText.required),
    endNum: Yup
        .number(validationText.number)
        .integer(validationText.integer)
        .min(1, validationText.biggerThan)
        .required(validationText.required)
});
