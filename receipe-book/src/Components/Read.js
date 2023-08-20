import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const [data,setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/receipes/'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))    
    }, [])
    return (
        <div className='d-flex w-60 vh-80 justify-content-center align item-center bg-light'>
            <div className='w-30 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Details of Receipe</h3>
                <div className='mb-2'>
                    <strong>Receipe Name: {data.title}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Ingredients: {data.ingredients}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Instructions: {data.instruction}</strong>
                </div>
                <Link to={`/update/${id}`} className='btn btn-success'>Update</Link>
                <Link to="/" className='btn btn-primary ml-2'>Back</Link>
            </div>     
        </div>
    )
}

export default Read
