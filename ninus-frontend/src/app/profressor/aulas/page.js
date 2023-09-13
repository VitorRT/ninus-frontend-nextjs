import { getAulas } from '@/actions/aula';
import ListClasses from '@/components/ListClasses';
import React from 'react';

export default async function ClassesHomePage() {
    const data = await getAulas();
    return (
        <>
            <h2>Aulas de Hoje</h2>
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Suas Aulas</h1>
                <ListClasses dataClasses={data}/>
            </div>
        </>
    )
}