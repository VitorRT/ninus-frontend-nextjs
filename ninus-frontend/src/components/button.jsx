import React from 'react'

export default function Button({ children, style, ...props }) {
    return (
        <button {...props}>
            { children }
        </button>
    )
}