import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()


  return (
    <div>
      {todos.map((todo) => (
        <ul class="list-reset">
        
        <li class={`relative flex items-center justify-between px-2 py-6 border-b ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          <div>
            <p  class="inline-block mt-1 ml-2 text-gray-600" key={todo.id}>{todo.text}</p>
          </div>
          <button type="button" class="absolute right-0 flex items-center" onClick={()=>dispatch(removeTodo(todo.id))}>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
      </ul>
      ))}
    </div>
  );
}

export default Todos;
