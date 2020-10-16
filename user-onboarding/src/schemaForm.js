import * as yup from "yup";

export default yup.object().shape({
    fName: yup
        .string()
        .required("Name is required.")
        .min(3, "Name must be at least 3 characters."),
    email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Email is required."),
    password: yup
        .string()
        .required("Password is required."),
    TOS: yup
        .boolean()
        .oneOf([true], "You must accept Terms of Service.")
});