import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Buttons from '../materials/Buttons';
import Input from '../materials/Input';
import TextArea from '../materials/TextArea';
import { ContextCart } from '../../provider/cart/context';
import { getTotal, saveCart } from '../../provider/cart/actions';
import { buy } from '../../utils/api/buy.queries';


//validation 
const schema = yup
    .object({
        name: yup.string().required('Nombre requerido'),
        email: yup.string().required('Falta el correo electrónico.').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Por favor, ingresa una direcccion de correo válida"),
        phone: yup.string().required('Telefono es requerido').min(7, "se requieren 7 digitos almenos").max(10, "supera los 10 digistos permitidos"),
        address: yup.string().required('Direccion es requerido'),
    })
    .required();



const ClientForm = ({ pay, data, openModal, closeCart }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState()
    const { cart, setCart } = useContext(ContextCart);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        setTotal(getTotal());
    }, getTotal())


    console.log(form);


    const hanldeSave = async () => {

        if (!pay) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: 'Debe seleccinar metodo de pago',
                height: '20px',
                width: '200px',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const payload = {
                productId: cart.id,
                total: getTotal(),
                fullName: form.name,
                email: form.email,
                phone: form.phone,
                address: form.address,
            };

            setLoading(true);


            const res = await buy(payload);
            if (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Recibo Generado',
                    height: '20px',
                    width: '200px',
                    showConfirmButton: false,
                    timer: 1500
                });

                data({ 'data': res.data, 'pay': pay, 'total': total })
                openModal();
                closeCart();
                saveCart([]);
                setCart([]);
                reset();

            } else (
                console.log(res)
            )
            setLoading(false);


        }
    }

    return (

        <div className="mt-2">
            <h3 className="text-center">Datos del Comprador</h3>

            

            <form onSubmit={handleSubmit(hanldeSave)}>
                <div>
                    <Input
                        id='name'
                        name='name'
                        register={register}
                        placeholder='Nombre '
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        defaultValue={(form && form.name) || ''}
                        vlue={form?.name}
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
                        id='address'
                        name='address'
                        placeholder='Direccion de envio'
                        type="text"
                        register={register}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        defaultValue={(form && form.address) || ''}
                        hint={
                            errors.address?.type === "required" || errors.address?.message
                                ? errors.address?.message
                                : ""
                        }
                        error={
                            errors.address?.type === "required" || errors.address?.message
                                ? true
                                : false
                        }
                    />
                </div>

                <div className='flex justify-center mt-4 h-48'>
                    <Buttons
                        text='generar Recibo'
                        className="bg-primary text-white"
                    />

                </div>
            </form>
        </div>
    )
}

export default ClientForm