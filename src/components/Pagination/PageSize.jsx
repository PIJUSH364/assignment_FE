import React from 'react'

export default function PageSize({ pageSize, handlePageSizeChange }) {

    return (
        <div className="flex items-center gap-3">
            <label className="text-sm font-medium" htmlFor="pageSize">
                Page Size:
            </label>
            <input
                type="number"
                id="pageSize"
                value={pageSize}
                min="1"
                max="100"
                onChange={handlePageSizeChange}
                className="w-16 h-8 border border-gray-400 rounded-md p-1 text-center outline-none font-nunito"
                aria-label="Select Page Size"
            />
            <span className="text-sm font-medium font-nunito">/ pages</span>
        </div>
    )
}
