/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

// interface Props {
//     name: string;
//     favColor: string;
// }

type OtherProps = {
    name: string;
    favColor: string;
};

// Notice here we're using the function expression with the type OtherProps
const Heading: React.FC<OtherProps> = ({ name, favColor }) => (
    <h1>
        My name is {name} and my favorite color is {favColor}.
    </h1>
);

export default Heading;
