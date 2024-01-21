import React from "react";
import { useDispatch, useSelector } from "react-redux";
import One from './components/One'


function App() {

  const value = useSelector((state)=>{
    return state.value;
  })

  const dispatch = useDispatch();


  return (
    
        <div className="App">
          <div style={{display:'flex', alignItems:'center' , justifyContent:'space-evenly',background:'red'}}>
            <button onClick={()=> dispatch({type:'increment'})}>inc</button>
            
            <h1>{value}</h1>
            <button onClick={()=> dispatch({type:'decrement'})}>dec</button>
          </div>
          <One/>
        </div>
    
  );
}

export default App;
