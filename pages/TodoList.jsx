import { useState } from 'react';
import Form from '../src/components/Form/Form';
import Header from '../src/components/header/Header';
import Tasks from '../src/components/Tasks/Tasks';

const TodoList = () => {

    return (
        <>
            <Header />
            <Form />
            <Tasks />
        </>
    )
}

export default TodoList