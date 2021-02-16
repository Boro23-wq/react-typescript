import React from 'react';

const Input = () => {
    const [value, setValue] = React.useState('');

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault;
        setValue(e.target.value);
        console.log(e.target.value);
    }

    return <input id="input-element" value={value} onChange={handleOnChange}></input>;
};

export default Input;
