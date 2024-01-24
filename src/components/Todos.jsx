import React from 'react'
import { useSelector } from 'react-redux';


function Todos() {
  const todos =  useSelector((state) => state.todos)
  return (
    
        <ul class="list-reset">
            <li class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <input type="checkbox" class="" />
                <p  class="inline-block mt-1 text-gray-600">Tailwind CSS To DO App List 1</p>
              </div>
              <button type="button" class="absolute right-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
            <li class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <input type="checkbox" class="" />
                <p  class="inline-block mt-1 text-gray-600 line-through">Tailwind CSS To DO App List 2</p>
              </div>
              <button type="button" class="absolute right-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          </ul>
   
  )
}

export default Todos