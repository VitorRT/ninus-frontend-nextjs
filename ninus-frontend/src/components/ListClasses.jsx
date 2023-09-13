import React from 'react';
import ListView from './listview';
import ClassCardItem from './classcarditem';

export default function ListClasses({ dataClasses }) {
    return (
        <>
            <ListView>
                {dataClasses && dataClasses.map((cs) => (
                    <ClassCardItem key={cs["id"]} classNinus={cs}/>
                ))}
            </ListView>
        </>
    )
}