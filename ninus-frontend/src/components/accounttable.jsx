import React, {useState, useEffect} from 'react';

export default function AccountTable({ data }) {
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        setDataList(data);
    }, [data])
    return (
        <>
            <table className="table-auto w-full rounded-xl border-collapse border border-neutral-200">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="text-left text-base px-4 py-2 flex items-center text-neutral-400">User ID</th>
                        <th className="text-left text-base px-4 py-2 text-neutral-400">Client Name</th>
                        <th className="text-left text-base px-4 py-2 text-neutral-400">School Type</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList && dataList.map((user) => {
                        return (
                            <tr key={user["id"]}>
                                <td className="px-4 py-5 text-sm">{user["id"]}</td>
                                <td className="px-4 py-6 text-sm">{user["name"]}</td>
                                <td className="px-4 py-6 text-sm">{user["school_type"]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}