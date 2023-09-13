"use client";

import React, {useState, useEffect} from 'react';
import { AiOutlineUser } from 'react-icons/ai'

export default function ClassesTable({ data }) {
    const[dataList, setDataList] = useState([]);
    const getStatusColor = (status) => {
        if(status === 'PROGRESS') {  
            return 'bg-sky-50 text-sky-500';
        } else if(status === 'FINISHED') {
            return 'bg-emerald-50 text-emerald-500)';
        } else if (status === 'FAVORITE') {
            return 'bg-amber-50 text-amber-500';
        } else {
            return 'bg-neutral-50 text-neutral-500';
        }
    }

    const getStatusName = (status) => {
        if(status === 'PROGRESS') {  
            return 'In Progress';
        } else if(status === 'FINISHED') {
            return 'Finished';
        } else if (status === 'FAVORITE') {
            return 'Favorite';
        } else {
            return 'Undefined';
        }
    }

    useEffect(()=> {
        setDataList(data);
    }, [data])

    return (
        <>
            {/* <input
                type="text"
                placeholder="Search..."   
                className="rounded-sm px-4 py-2 w-full mb-4"
            /> */}
            <table className="table-auto w-full rounded-xl border-collapse border border-neutral-200">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="text-left text-base px-4 py-2 flex items-center text-neutral-400"><span className='mr-2'><AiOutlineUser color='gray'/></span> User</th>
                        <th className="text-left text-base px-4 py-2 text-neutral-400">Class ID</th>
                        <th className="text-left text-base px-4 py-2 text-neutral-400">Class Name</th>
                        <th className="text-left text-base px-4 py-2 text-neutral-400">Class Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList && dataList.map((cs) => {
                        return (
                            <tr key={cs["id"]}>
                                <td className="px-4 py-5 text-sm">{cs["client"]["name"]}</td>
                                <td className="px-4 py-6 text-sm">{cs["id"]}</td>
                                <td className="px-4 py-6 text-sm">{cs["class_name"]}</td>
                                <td className="px-4 py-6 text-sm"><span className={`${getStatusColor(cs["categorie"])} py-2 px-4 rounded-full`}>{getStatusName(cs["categorie"])}</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination mt-4">
                {/** fazer paginação depois... */}
            </div>
        </>
    )
}