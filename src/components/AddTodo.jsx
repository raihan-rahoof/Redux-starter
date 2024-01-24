import React , {useState} from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import Todos from './Todos';

function AddTodo() {

    const [input , setInput]=useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) =>{
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
        console.log(input)

    }

  return (

   <div>
    <div class="flex items-center justify-center h-screen">
        <div class="w-full px-4 py-8 mx-auto shadow lg:w-1/3 bg-white">
          <div class="flex items-center mb-6">
            <h1 class="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
          </div>
          <form onSubmit={addTodoHandler}>
          <div class="relative">
            <input type="text" placeholder="What needs to be done today?"
              class="w-full px-2 py-3 border rounded outline-none border-grey-600" onChange={(e)=> setInput(e.target.value)} />
          </div>
          <button type="submit" class="mt-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ADD</button>
          </form>
          <Todos/>
          
        </div>
    </div>
    </div> 
   
  )
}

export default AddTodo