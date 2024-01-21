import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const changeBackground = useSelector((state)=> state.change)



  const handleClick = ()=> {
    dispatch({type:'change-background',payload:!changeBackground})
  }

  return (
    <div style={{width:'100%' , height:'59rem' , display:'flex' , justifyContent:'center',alignItems:'center' , backgroundColor:changeBackground ? 'yellow' : 'initial'}}>
      <button onClick={handleClick}>change me</button>
    </div>
  )
}

export default App