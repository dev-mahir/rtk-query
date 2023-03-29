import React from 'react'
import { useGetSingleTodoQuery, useGetTodosQuery } from '../api/apiSlice';

const Todo = () => {
  const { data: todos } = useGetTodosQuery();

  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                {todos?.map(({ id, name, status }, index) =>
                  <li key={index} className="list-group-item">{name}  : {status}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo





