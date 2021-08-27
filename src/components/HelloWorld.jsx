import React from 'react';

const HelloWorld = ({ data }) => {
    const id = data?.id;
    return (<h1>Hello from react with snowpack!</h1>);
};

export default HelloWorld;
