import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (e) => {

        if (!e.target.value.trim()) return;

        // console.log(e.code);
        if (e.code === "Enter") {
            console.log(e.target.value);
            // todoList.push(e.target.value);
            setTodoList([...todoList, e.target.value]);
            console.log([...todoList, e.target.value]);

            e.target.value = "";
        }
    };

    const removeTodo = (index) => {
        console.log(index);
        // todoList.splice(index, 1);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }

    return (
        <div className="bg-body-secondary vh-100">
            <div className="container py-5">
                <h1 className="text-center">Todo List</h1>
                <div className="card mt-5">
                    {/* <img className="card-img-top" src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
                    <div className="card-header">
                        <input
                            type="text"
                            className="form-control"
                            onKeyDown={addNewTodo}
                        />
                    </div>
                    <div className="card-body p-0">
                        <AnimatePresence mode="popLayout">
                            {todoList.map((todo, index) => {
                                return (
                                    <motion.div
                                        layout
                                        initial={{ x: '100%', opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: '100%', opacity: 0 }}
                                        transition={{ duration: 0.3, type: 'spring' }}
                                        key={todo}
                                        className="d-flex justify-content-between p-4">
                                        <h5>{todo}</h5>
                                        <button className="btn btn-danger" onClick={() => { removeTodo(index) }}>Delete</button>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;