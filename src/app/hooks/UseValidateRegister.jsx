'use client'
import { useState } from "react";

export default function UseValidateRegister() {

    const [formErrors, setFormErrors] = useState([]);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    const validateField = (fieldName, value) => {
        let fieldError = '';

        if (fieldName === 'email') {

            if(validateEmail(value)) setShowErrorEmail(false);

            if (!value || !validateEmail(value)) {
                fieldError = 'Error : Ingrese un correo electrónico válido.';
                setShowErrorEmail(true);
            }
        }

        if (fieldName === 'password') {
            if(validatePassword(value)) setShowErrorPassword(false);

            if (!value || value.length <= 5 || !validatePassword(value)) {
                fieldError = 'Error : La contraseña debe tener al menos 6 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.';
                setShowErrorPassword(true)
            }
        }
        setFormErrors(({ ...formErrors, [fieldName]: fieldError }));
    };

    return {
        formErrors,
        validateField,
        showErrorEmail,
        showErrorPassword,
    }
}