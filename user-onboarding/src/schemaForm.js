import * as yup from "yup";

export default yup.object()
.shape({
    name: yup
        .string()
        .required("username is required")
        .min(3, "username must be 3 character"),
    email: yup
        .string()
        .email("must be a valid email address")
        .required("email is required"),
    password: yup
        .string()
        .required("password is required"),
    TOS: yup
        .boolean()
});