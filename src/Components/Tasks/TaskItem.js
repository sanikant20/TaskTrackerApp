import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, deleteTask, toggleComplete, setCurrentTask }) => {
    return (
        <div className={`card ${task.isCompleted ? 'border-success' : 'border-secondary'} mb-3`}>
            <div className="card-body d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                    <span
                        onClick={() => toggleComplete(task.id)}
                        className={`flex-grow-1 me-2 ${task.isCompleted ? 'text-decoration-line-through text-muted' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        {task.text}
                    </span>
                    {task.isCompleted && (
                        <span className="text-success d-flex align-items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                            Completed
                        </span>
                    )}
                </div>

                <div>
                    <button
                        onClick={() => setCurrentTask(task)}
                        className="btn btn-sm btn-outline-primary me-2 mt-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="btn btn-sm btn-outline-danger mt-2"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
