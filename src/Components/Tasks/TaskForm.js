import React, { useEffect, useState } from 'react';

const TaskForm = ({ addTask, updateTask, currentTask, setCurrentTask }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(currentTask.text);
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentTask.id) {
            updateTask({ ...currentTask, text });
        } else {
            addTask({ text, isCompleted: false });
        }
        setText('');
        setCurrentTask({ text: '', id: null, isCompleted: false });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <button type="submit" className={`btn btn-${currentTask.id ? 'warning' : 'primary'}`}>
                    {currentTask.id ? 'Update Task' : 'Add Task'}
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
