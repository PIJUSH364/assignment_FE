import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import InputField from '../InputField';


const UserModel = ({ setShouldShow }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        role: Yup.string().required('Role is required')
    });

    return (
        <Formik
            initialValues={{ name: "", email: '', role: 'member' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setShouldShow(false);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <div className="modalBackground flex justify-center items-center py-5">
                    <Form className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md relative">
                        <button
                            type="button"
                            className="absolute top-4 right-4 text-gray-500 text-xl"
                            onClick={() => setShouldShow(false)}
                        >
                            <AiOutlineClose />
                        </button>

                        <InputField label="Name" name="name" placeholder="Enter your name" />
                        <InputField label="Email" name="email" type="email" placeholder="Enter your Email" />

                        <div className="mb-4">
                            <label htmlFor="role" className="block text-black">Role</label>
                            <Field
                                as="select"
                                name="role"
                                id="role"
                                className="mt-1 outline-none block w-full border border-gray-200 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm text-black p-2"
                            >
                                <option value="member">Member</option>
                                <option value="admin">Admin</option>

                            </Field>
                            <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black border-black border-2 text-white py-2 mt-4 px-4 rounded-md transition-all duration-300 hover:text-black hover:bg-white hover:border-gray-400 hover:border-2"
                        >
                            Continue
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default UserModel;