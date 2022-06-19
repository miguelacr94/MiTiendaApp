import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from 'sweetalert2'

import TextArea from '../materials/TextArea'
import { sendContact } from '../../utils/api/contact.queries';
import Buttons from '../materials/Buttons'
import Input from '../materials/Input'


const schema = yup
    .object({
        name: yup.string().required('Nombre requerido'),
        email: yup.string().required('Falta el correo electrónico.').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Por favor, ingresa una direcccion de correo válida"),
        phone: yup.string().required('Telefono es requerido').min(7, "se requieren 7 digitos almenos").max(10, "supera los 10 digistos permitidos"),
        description: yup.string().required('Descripcion es requerida').min(10, "se requieren 10 digitos almenos"),
    })
    .required();


const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(false);

    const hanldeSave = async () => {

        const payload = {
            fullName: form.name,
            email: form.email,
            phone: form.phone,
            description: form.description,
        };

        setLoading(true);
        const res = await sendContact(payload);
        if (res) {
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Datos Enviados',
                height:'20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
              });
              reset();
              setForm(null);
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Datos Enviados',
                height:'20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
              });
              reset();
              setForm(null);
              
        }
        setLoading(false);

    }

    

   

    return (
        <div>
            
            <form onSubmit={handleSubmit(hanldeSave)}>
                <div>
                <Input
                        id='name'
                        name='name'
                        register={register}
                        placeholder='Nombre '
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        defaultValue={(form && form.name) || ''}
                        value={form?.name}
                        hint={
                            errors.name?.type === "required" || errors.name?.message
                                ? errors.name?.message
                                : ""
                        }
                        error={
                            errors.name?.type === "required" || errors.name?.message
                                ? true
                                : false
                        }
                    />
                </div>

                <div>
                <Input
                        id='email'
                        name='email'
                        placeholder='Correo Electronico'
                        type="text"
                        register={register}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        defaultValue={(form && form.email) || ''}
                        hint={
                            errors.email?.type === "required" || errors.email?.message
                                ? errors.email?.message
                                : ""
                        }
                        error={
                            errors.email?.type === "required" || errors.email?.message
                                ? true
                                : false
                        }
                    />
                </div>

                <div>
                <Input
                        id='phone'
                        name='phone'
                        placeholder='Numero Telefonico'
                        type="text"
                        register={register}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        defaultValue={(form && form.phone) || ''}
                        hint={
                            errors.phone?.type === "required" || errors.phone?.message
                                ? errors.phone?.message
                                : ""
                        }
                        error={
                            errors.phone?.type === "required" || errors.phone?.message
                                ? true
                                : false
                        }
                    />
                </div>

                <div>
                    <TextArea
                        id='description'
                        name='description'
                        placeholder='Escribir mensaje'
                        register={register}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        defaultValue={(form && form.description) || ''}
                        hint={
                            errors.description?.type === "required" || errors.description?.message
                                ? errors.description?.message
                                : ""
                        }
                        error={
                            errors.description?.type === "required" || errors.description?.message
                                ? true
                                : false
                        }
                    />
                </div>

                <div className='flex justify-center mt-4 h-48'>
                    <Buttons
                        text='Enviar'
                        className="bg-primary w-24"
                    />
                </div>
            </form>

        </div>
    )
}

export default ContactForm
