import { useForm } from "react-hook-form";
import { useValidations } from "../../hooks/useValidations.js";
import { ContactoPageLayout } from "./ContactoPageLayout";
import './_contacto-page.scss';
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const ContactoPageContainer = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { validateEmail } = useValidations();
    const [ success, setSuccess ] = useState( false )

    const onSubmit = async ( { email, asunto, consulta } ) => {
        if ( email && asunto && consulta ) {
            let temParams = {
                from_email: email,
                message: consulta,
            }
            setSuccess( true );
            return await emailjs.send( 'service_8jkaq4f', 'template_sov04r4', temParams, 'SVTDjyTkDVZlAr2Fs' );
        }
    }


    return (
        <ContactoPageLayout
            register={ register }
            handleSubmit={ handleSubmit }
            errors={ errors }
            validateEmail={ validateEmail }
            onSubmit={ onSubmit }
            success={ success }
        />
    );
};
