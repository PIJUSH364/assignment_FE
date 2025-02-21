import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { dateFormatter } from '../../../utils/method/helper';

export default function ViewProfile({ setShouldShow, menuIndex }) {
    const user = useSelector(state => state.user.userList).filter((user, index) => index === menuIndex)[0]
    const { name, email, status, createdAt, updatedAt, role } = user

    return (
        <div className="max-w-sm  rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg relative">
            <div className='mb-4'>
                <button
                    type="button"
                    className="absolute top-2 right-2 text-black text-2xl p-2 hover:bg-gray-200 rounded-full"
                    onClick={() => setShouldShow(false)}
                >
                    <AiOutlineClose />
                </button>
            </div>

            {/* Profile Image */}
            <div className="relative mx-auto w-36 rounded-full">
                <span className={`absolute right-0 m-3 h-3 w-3 rounded-full 
                    ${status == "active" ? "bg-green-500 ring-2 ring-green-300" : "bg-slate-400 ring-2 ring-slate-300"}  ring-offset-2`}></span>
                <img
                    className="mx-auto h-auto w-full rounded-full"
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIoQnASEQh51blUTQTG7eAHKzXX6_NizCw&s"}
                    alt="Profile"
                />
            </div>

            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                {name}
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
                {email}
            </h3>


            {/* Profile Details */}
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3 text-sm">
                    <span>Status</span>
                    <span className="ml-auto">
                        <span className={`rounded-full ${status == "active" ? "bg-green-200 text-green-700" :
                            "bg-slate-200 text-slate-700"}  py-1 px-2 text-xs font-medium`}>
                            {status}
                        </span>
                    </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                    <span>Role</span>
                    <span className="ml-auto">{role}</span>
                </li>

                <li className="flex items-center py-3 text-sm">
                    <span>Last Active</span>
                    <span className="ml-auto">{dateFormatter(updatedAt)}</span>
                </li>
                <li className="flex items-center py-3 text-sm">
                    <span>Joined On</span>
                    <span className="ml-auto">{dateFormatter(createdAt)}</span>
                </li>
            </ul>
        </div >
    )
}

