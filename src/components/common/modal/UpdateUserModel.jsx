import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import InputField from '../InputField';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFetchUsers } from '../../custom/Hook/useFetchUsers';
import { useSelector } from 'react-redux';
import { Role, Status } from '../../../utils/method/helper';
import SelectInputField from '../SelectInputField';

const UpdateUserModel = ({ setShouldShow, menuIndex, permissionModal = false }) => {
    const user = useSelector(state => state.user.userList).filter((user, index) => index === menuIndex)[0]
    const { name, email, status, role } = user

    const { fetchUser } = useFetchUsers()
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        role: Yup.string().required('Role is required'),
        ...permissionModal && { status: Yup.string().required('Status is required') }
    });

    const handleAddUser = (values, setSubmitting) => {
        axios.put('http://localhost:8001/api/v1/user/update_user', { ...values, id: String(user.id) })
            .then(async (res) => {
                toast.success(res.data.message);
                await fetchUser(1)
                setSubmitting(false);
            })
            .catch((err) => {
                console.log(err)
                toast.error("Error adding user Data");
                setSubmitting(true);
            })
            .finally(() => setShouldShow(false))
    }

    return (
        <Formik
            initialValues={{ name: name, email: email, role: role, ...permissionModal && { status: status } }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleAddUser(values, setSubmitting)
            }}
        >
            {({ isSubmitting }) => (
                <div className="modalBackground flex justify-center items-center py-5">
                    <Form className="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-md relative">
                        <button
                            type="button"
                            className="absolute top-4 right-4 text-gray-500 text-xl"
                            onClick={() => setShouldShow(false)}
                        >
                            <AiOutlineClose />
                        </button>

                        <InputField label="Name" name="name" placeholder="Enter your name" disabled={permissionModal} />
                        <InputField label="Email" name="email" type="email" placeholder="Enter your Email" disabled={permissionModal} />
                        {
                            permissionModal && <SelectInputField label="Status" name="status" optionList={Status} />
                        }
                        <SelectInputField label="Role" name="role" optionList={Role} disabled={permissionModal} />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black border-black border-2 text-white py-2 mt-4 px-4 rounded-md transition-all duration-300 hover:text-black hover:bg-white hover:border-gray-400 hover:border-2"
                        >
                            Update
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default UpdateUserModel;




