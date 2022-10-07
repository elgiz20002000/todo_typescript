import React, {useState } from 'react';
import './App.css';
import Lists from './list';

export interface List {
  id:number
  text:string
  checked:boolean
}

function App() {
  const [todos , setTodos] =  useState('') ,
  [list , setList] = useState<List[]>([])

  const keyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      setList((state) => [{text:todos , checked:false , id:Math.floor(Math.random() * 100)} , ...state ])
      setTodos('')
    }
  }
    const check = (id:number) => {
      setList(list =>  list.map(item => {
        if(item.id === id) {
          item.checked = !item.checked
        }
        console.log(item);
        
        return item
      }))
  }
  const removeItem = (e:React.MouseEvent ,id:number) => {
    e.preventDefault()
    let res = window.confirm('are you sure')
      if(res) {
      setList((list) => {
        return list.filter(item => item.id !== id)
      })
    }
  }
  

  return (
    <>
    <h1>Simple Todo with React + TypeScript</h1>
      <div className="input-field" >
        <input  onKeyDown={keyPress} value={todos} onChange={(e) => setTodos( e.target.value)}  id="todos" type="text" className="validate"/>
        <label className="active" htmlFor="todos">Add todos</label>
      </div>
      {list.length ? <Lists removeItem={removeItem} Check={check} list={list}/> : <div className="center-align">Empty</div>}
    </>
  );
}
export default App;
