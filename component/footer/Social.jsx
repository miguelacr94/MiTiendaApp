import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../materials/Input'

const Social = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    return (
        <div>
            <h3 className="text-center">Newsleatter</h3>
            <Input
            id='name'
            name='name'
            register={register}
            placeholder=''
            // onChange={(e) => setForm({ ...form, name: e.target.value })}
            // defaultValue={(form && form.name) || ''}
            // hint={
            //     errors.name?.type === "required" || errors.name?.message
            //         ? errors.name?.message
            //         : ""
            // }
            // error={
            //     errors.name
            // }
            />
            <div className="flex justify-center">
                <img
                    src="./social/facebook.png"
                    className="w-8 h-8 bg-white m-1 rounded-md"
                />
                <img
                    src="./social/twitter.png"
                    className="w-8 h-8 bg-white m-1 rounded-md"
                />
                <img
                    src="./social/instagram.png"
                    className="w-8 h-8 bg-white m-1 rounded-md" 
                />
            </div>
        </div>
    )
}

export default Social