/* eslint-disable prettier/prettier */
import React from 'react';
import './App.css';

// importing components
import Heading from './components/Heading';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Counter from './components/Counter';

const handleOnClick = () => {
    console.log('I am clicked!');
};

// Notice here we're using the function expression with the type OtherProps
const App: React.FC = () => {
    return (
        <>
            <Heading name="Sintu Boro" favColor="Black" />
            <Button onClick={handleOnClick}>Just a Button!</Button>
            <Input />
            <Container />
            <Counter />
        </>
    );
};

export default App;
