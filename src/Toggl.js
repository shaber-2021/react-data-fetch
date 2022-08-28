import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Toggl = () => {
  const[todos,settodos]=useState()
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState()
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      if(!res.ok){
        throw Error ('fetch is not successful')
      }else{return res.json()}
      })
    .then((data)=>{settodos(data)
      setloading(false)
      seterror(null)
    })
    .catch((error)=>{
      seterror(error.message)
      setloading(false)
      
    })
  },[])
  const show = 'data is loading'
  return (
    <div>
      <h1>todos</h1>
      {error && <p>{error}</p>}
      {loading && show}
      {todos && todos.map((todo)=>{ return<p key={todo.id}>{todo.title}</p>})}
    </div>
  )
}

export default Toggl