import React from 'react'

export const TaskElement = props => {
    const { task } = props
    return (
        <div className='row my-3'>
            <div className="col-6">
                <p>{task.task}</p>
            </div>
            <div className="col-2">
                {
                    task.done ? <button className="btn btn-danger">Undone</button> : <button className="btn btn-primary">Done</button>
                }
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Edit</button>
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Delete</button>
            </div>
        </div>
    )
}