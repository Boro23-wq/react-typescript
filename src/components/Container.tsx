/* eslint-disable react/prop-types */
import React from 'react';

// using types for props

// type ButtonProps = {
//     color?: string;
//     text?: string;
// };

// type props = ButtonProps & {
//     height?: number;
// };

// using interfaces for props

interface ButtonProps {
    color?: string;
    text?: string;
}

interface props extends ButtonProps {
    height?: number;
}

const Container: React.FC<props> = ({ color = 'pink', text = 'Just a Div', height = 20 }) => {
    return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>;
};

export default Container;
