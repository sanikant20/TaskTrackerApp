import React from 'react';
import TaskApp from './Tasks/TaskApp';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to the Task Tracker App</h1>
                <p>Manage your tasks efficiently and stay organized!</p>
            </header>
            <main>
                <TaskApp />
            </main>
        </div>
    );
};

export default Home;
