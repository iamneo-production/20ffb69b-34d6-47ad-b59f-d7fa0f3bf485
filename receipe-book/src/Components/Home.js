import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const Home_Receipe = () => {
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        fetch('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/receipes')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const addToFavorites = (recipe) => {
        if (!favorites.some((item) => item.id === recipe.id)) {
            setFavorites([...favorites, recipe]);
            const clearSearch = () => {
                setSearchTerm('');
                fetch('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/receipes')
                    .then(response => response.json())
                    .then(data => setData(data));
            };


            axios.post('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/favourite', recipe)
                .then((res) => {
                    console.log('Recipe added to favorites:', res.data);
                })
                .catch((err) => console.log(err));
        }
    };
    const handleSearch = () => {

        const filteredRecipes = data.filter(item =>
           item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredRecipes);
    };

    const clearSearch = () => {
        setSearchTerm('');
        fetch('https://ide-efacaadeebfedccaddfdbbeaaefacc.project.examly.io/proxy/8080/receipes')
            .then(response => response.json())
            .then(data => setData(data));
    };



    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a href='/' class="navbar-brand">Recipe Book</a>

                <form class="form-inline" onSubmit={event => { event.preventDefault(); handleSearch(); }}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Recipe" aria-label="Search"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button className="btn btn-outline-success ml-2" onClick={clearSearch}>Show All</button>
                </form>

            </nav>

            <div className="jumbotron container">
                <h1 className="display-4">Welcome Recipe Book App !!</h1>
                <hr className="my-4" />
            </div>

            <div className='d-flex justify-content-center mb-4'>
                <Link to="/create" className='btn btn-success'>Add Recipes +</Link>
                <Link to="/Favourite" className='btn btn-success ml-2'>Favourites</Link>
            </div>

            <div className='row d-flex justify-content-center'>
                {data.map(item => (
                    <div className="card ml-2 mb-4" style={{ width: "16rem" }}>
                        <img src={item.image} class="card-img-top" alt={item.title} style={{ width: "100%", height: "200px" }} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>

                            <button
                                type="button"
                                class="btn btn-sm btn-light"
                                onClick={() => addToFavorites(item)}
                                disabled={favorites.some((favItem) => favItem.id === item.id)}
                            >
                                {favorites.some((favItem) => favItem.id === item.id)
                                    ? "Added to Favorites"
                                    : "Make Favorite"}
                            </button>

                            <Link to={`/read/${item.id}`} class="btn btn-sm btn-info ml-2">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home_Receipe
