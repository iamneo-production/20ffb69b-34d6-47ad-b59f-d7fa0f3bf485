import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Create_Receipe() {

    const [values, setValues] = useState({
        title:'',
        image:'',
        ingredients:'',
        instruction:''
    })

    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://ide-decfdfebbdedccaddfdbbeaaefacc.project.examly.io/proxy/8080/receipes',values)
        .then(res=>{
            console.log(res)
            navigate('/')
        }).catch(err=>console.log(err))
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">Add Receipe Details Here</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor='title'>Receipe Title:</label> <input
                                        type="text" className="form-control"
                                        name="title" placeholder="Title" 
                                        onChange={e=>setValues({...values, title:e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='image'>Image Link</label> <input
                                        type="url" className="form-control"
                                        name="image" placeholder="Link" 
                                        onChange={e=>setValues({...values, image:e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='ingredients'>Ingredients</label> <input
                                        type="text" className="form-control"
                                        name="ingredients" placeholder="ingredients"
                                        onChange={e=>setValues({...values, ingredients:e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='instruction'>Instruction</label> <input
                                        type="text" className="form-control"
                                        name="instruction" placeholder="instruction" 
                                        onChange={e=>setValues({...values, instruction:e.target.value})}/>
                                </div>
                                <button className="btn btn-success">Submit Details</button>
                                <Link to="/" className='btn btn-success ml-2'>Back</Link>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create_Receipe
