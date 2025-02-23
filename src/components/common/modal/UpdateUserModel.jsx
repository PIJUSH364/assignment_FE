import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "../InputField";
import axios from "axios";
import toast from "react-hot-toast";
import { useFetchUsers } from "../../custom/Hook/useFetchUsers";
import { useDispatch, useSelector } from "react-redux";
import { Role, Status } from "../../../utils/method/helper";
import SelectInputField from "../SelectInputField";
import API_URLS from "../../../utils/constant/UrlContant";
import {
    resetFilterValue,
    ResetPaginationMetaData,
} from "../../../features/users/userSlice";

const UpdateUserModel = ({
    setShouldShow,
    menuIndex,
    permissionModal = false,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const user = useSelector((state) => state.user.userList).filter(
        (user, index) => index === menuIndex
    )[0];
    const { fetchUser } = useFetchUsers();
    const dispatch = useDispatch();
    const { name, email, status, role } = user;

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        role: Yup.string().required("Role is required"),
        ...(permissionModal && {
            status: Yup.string().required("Status is required"),
        }),
    });

    const handleAddUser = (values, setSubmitting) => {
        setIsLoading((prev) => !prev);
        axios
            .put(API_URLS.USER.UPDATE, { ...values, id: String(user.id) })
            .then(async (res) => {
                toast.success(res.data.message);
                setShouldShow(false);
                dispatch(ResetPaginationMetaData());
                dispatch(resetFilterValue());
                await fetchUser(1, 5);
            })
            .catch((err) => {
                const message = err?.response?.data?.message || "Something went wrong";
                // console.log(message);
                toast.error(message);
            })
            .finally(() => {
                setSubmitting(false);
                setIsLoading((prev) => !prev);
            });
    };

    return (
        <Formik
            initialValues={{
                name: name,
                email: email,
                role: role,
                ...(permissionModal && { status: status }),
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleAddUser(values, setSubmitting);
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

                        <InputField
                            label="Name"
                            name="name"
                            placeholder="Enter your name"
                            disabled={isLoading || permissionModal}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                            disabled={isLoading || permissionModal}
                        />
                        {permissionModal && (
                            <SelectInputField
                                label="Status"
                                name="status"
                                optionList={Status}
                                disabled={isLoading}
                            />
                        )}
                        <SelectInputField
                            label="Role"
                            name="role"
                            optionList={Role}
                            disabled={isLoading || permissionModal}
                        />

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`modal_submit_btn ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isLoading ? "Updating..." : "Update"}
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default UpdateUserModel;
