import React from 'react';

export default function ClassCardItem({ classNinus }) {
    return (
        <>
            <div className='p-2 w-full border border-neutral-200'>
                <h2 className='mb-3'>{classNinus['class_name']}</h2>
            </div>
        </>
    )
}