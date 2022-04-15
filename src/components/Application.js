import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header/Header";
import {Main} from "./main/Main";

function Application(data) {
    console.log(data)
    return (
        <>
        <Header />
        <Main onSearch={data.onSearch} />
        </>
    );
}
export default Application
