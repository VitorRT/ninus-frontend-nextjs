import React from 'react';

export default function ListView({ children }) {
    return (
      <ul className="overflow-y-auto max-h-full">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="py-2 px-4">
            {child}
          </li>
        ))}
      </ul>
    );
}