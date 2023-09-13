"use client";

import ClassesTable from '@/components/classestable';
import HeadNavbar from '@/components/headnavbar';
import SideNavbar from '@/components/sidenavbar';
import React,{useState, useEffect} from 'react';
import api from '@/api/api';
import AccountTable from '@/components/accounttable';

export default function HomePage() {
    const [classesList, setClassesList] = useState([])
    const [accountList, setAccountList] = useState([]);

    useEffect(() => {
        api.get("/api/v1/class/all")
            .then(res => {
                const list = res.data["_embedded"]["classNinusDetailsList"];
                setClassesList(list);
            })
            .catch(err => {
                
            });

        api.get("/api/v1/client")
            .then(res => {
                const list = res.data["_embedded"]["clientDetailsList"]
                setAccountList(list);
            })
            .catch(err => {

            })
    } , [])
    return (
        <>
            <main className="flex">
                <SideNavbar />
                <div className='pl-10 lg:pl-60 w-full'>
                    <HeadNavbar />

                    <div className='px-10 mt-10'>
                        <h2 className="text-lg">Manage all resources 📋</h2>

                        <div className='my-12'>
                            <h3 className='mb-4'>Account Table</h3>
                            <AccountTable data={accountList}/>
                        </div>

                        <div className='my-12'>
                            <h3 className='mb-4'>Class Table</h3>
                            <ClassesTable data={classesList}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}