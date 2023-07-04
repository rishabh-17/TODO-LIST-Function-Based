import React from 'react'

export default function List(props) {
    return (
        <div className="container my-2">
            <div className="row">

                <div className="col-9"><li className='shadow-lg'>{props.value}</li></div>
                <div className="col-2"><button className="btn btn-sm btn-danger" onClick={()=>{props.handleDelete(props.id)}}>Delete</button></div>


            </div>
        </div>
    )
}
