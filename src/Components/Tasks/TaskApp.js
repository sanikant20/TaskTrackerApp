import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskApp = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [currentTask, setCurrentTask] = useState({ text: '', id: null, isCompleted: false });
    const [sortBy, setSortBy] = useState('date'); // default sorting by date

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        const newTask = { ...task, id: Date.now() };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    };

    const updateTask = (task) => {
        const updatedTasks = tasks.map(t => t.id === task.id ? task : t);
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(t => t.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleComplete = (taskId) => {
        const updatedTasks = tasks.map(t => t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t);
        setTasks(updatedTasks);
    };

    const clearTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    // Sorting logic
    const sortedTasks = [...tasks].sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return b.id - a.id; // Newer tasks first
            case 'completed':
                return a.isCompleted - b.isCompleted; // Incomplete tasks first
            case 'text':
                return a.text.localeCompare(b.text); // Alphabetical order
            default:
                return 0;
        }
    });

    return (
        <div className="task-app">
            <h1>Task Tracker</h1>
            <TaskForm addTask={addTask} updateTask={updateTask} currentTask={currentTask} setCurrentTask={setCurrentTask} />
            <div className="mb-3">
                <label htmlFor="sortSelect" className="form-label">Sort by:</label>
                <select 
                    id="sortSelect" 
                    className="form-select"
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="date">Date</option>
                    <option value="completed">In Complete</option>
                    <option value="text">Text</option>
                </select>
            </div>
            <TaskList 
                tasks={sortedTasks} 
                deleteTask={deleteTask} 
                toggleComplete={toggleComplete} 
                setCurrentTask={setCurrentTask} 
            />
            <button onClick={clearTasks} className="btn btn-danger mt-3">
                Clear All Tasks
            </button>
        </div>
    );
};

export default TaskApp;
