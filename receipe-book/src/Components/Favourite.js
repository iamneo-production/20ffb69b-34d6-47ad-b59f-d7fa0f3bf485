import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Favourite = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/favourite')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const removeFromFavorites = (recipeId) => {
        const updatedData = data.filter(item => item.id !== recipeId);
        setData(updatedData);
        axios.delete(`https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/favourite/${recipeId}`)
            .then(res => {
                console.log('Recipe removed from favorites:', res.data);
            })
            .catch(err => console.log(err));
    };

    return (

        <div>
            <div className='container mt-2'>
            <Link to="/" className='btn btn-secondary ml-2'>Back</Link>
            </div>
            <h4 className='text-center'>Favorite List</h4>
            <div className='row d-flex justify-content-center'>
                
                {data.map(item => (
                    <div className="card ml-2 mb-4 mt-3" style={{ width: "16rem" }}>
                        <img src={item.image} class="card-img-top" alt={item.title} style={{ width: "100%", height: "200px" }}/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                        </div>
                        <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeFromFavorites(item.id)}
                        >
                            Remove Favorite
                        </button>
                         
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favourite;