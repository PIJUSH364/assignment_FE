import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function InputField({ label, name, type = 'text', placeholder = "" }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-black">{label}</label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder.trim() || label}
        className="mt-1 outline-none block w-full border border-gray-200 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm text-black p-2"
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  )
}
