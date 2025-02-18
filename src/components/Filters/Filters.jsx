import React from "react";

const Filters = ({ search, setSearch, roleFilter, setRoleFilter }) => {
    return (
        <div className="flex gap-4">
            <input
                type="text"
                placeholder="Search user..."
                className="p-2 border rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                className="p-2 border rounded"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
            >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Developer">Developer</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
        </div>
    );
};

export default Filters;
