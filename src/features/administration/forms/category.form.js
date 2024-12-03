import * as Yup from 'yup';

export const categoryInitValues = () => {
    return {
        id: "",
        name: "",
        description: ""
    }
}

export const categoryValidationSchema = () => {
    return Yup.object({
        name: Yup.string()
            .required("El nombre de la categoría es requerido"),
        description: Yup.string()
            .min(10, "La descripción debe tener al menos 10 caracteres.")
    })
}