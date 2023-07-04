
import './App.css';
import React, { useState} from 'react'
import List from './components/List';

function App() {

  const [text, setText] = useState('')
  const [item, setItem] = useState([])

  const handleChange=(t)=>{
    setText(t.target.value)
  }

  const handleAdd=()=>{
    setItem([...item,text])
    setText('')
  }

  const handleDelete=(id)=>{
    let items = item.filter((element,i)=>{
      return id!==i
    })
    setItem(items)

  }
  return (
    <>
    



      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 shadow-lg mx-auto p-3">
            <h1 className='text-center'>Todo List</h1>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input type="text" className='form-control' value={text} placeholder='Write here' onChange={handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning fw-bold" onClick={handleAdd} >
                    Add

                  </button>
               
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
              {
                item.map((element,i)=>{
                  return <List value={element} key = {i} id ={i} handleDelete={handleDelete} />

                })
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
