import React, { useState } from 'react'
import Icons from '../../utils/icons'

const TextArea = ({
  id,
  name,
  register,
  className,
  onChange,
  defaultValue,
  placeholder,
  hint,
  type,
  error = false
}) => {




  return (
    <div className="px-2">
      {register && (
        <input
          {...register(id)}

          id={id}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          className={`${className}  text-grey-Dark border ${error ? 'border-red-400' : 'border-grey'} rounded-lg w-full h-16 m-2 placeholder:px-2 px-2 `}
          placeholder={placeholder}
          error
        />
      )}

      {hint && (
        <div
          className={`flex justify-start w-full -mt-2 ml-2 ${error ? "text-red-500" : "text-dark"
            }`}
        >
          <p className="text-xs font-extralight" >{Icons.Info}</p>
          <p className="text-xs font-extralight">{hint}</p>
        </div>
      )}


    </div>
  )
}

export default TextArea