import { useForm } from "react-hook-form";
import { useValidations } from "../../hooks/useValidations.js";
import { ContactoPageLayout } from "./ContactoPageLayout";
import './_contacto-page.scss';

export const ContactoPageContainer = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { validateEmail } = useValidations();

    const onSubmit = ( { email, asunto, consulta }  ) => {
        console.log(email, asunto, consulta)
    }

    return (
        <ContactoPageLayout
            register={ register }
            handleSubmit={ handleSubmit }
            errors={ errors }
            validateEmail={ validateEmail }
            onSubmit={ onSubmit }
        />
    );
};
