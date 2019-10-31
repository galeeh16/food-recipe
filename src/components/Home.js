import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import img from './food2.jpg';
import Spinner from './Spinner';
import useStateWithCallback from 'use-state-with-callback';
import Pagination from "react-js-pagination";

const Home = () => {
    const APP_ID = '249ec744';
    const APP_KEY = 'bd35a850cc477d049d9df91a83dd6619';

    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [activePage, setActivePage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setActivePage(1);
        getRecipes(0, 10);
    }, [query]);

    const handlePageChange = (pageNum) => {
        setActivePage(pageNum);
        let from  = (pageNum - 1) * 10;
        let to  = (pageNum - 1) * 10 + 10;
        getRecipes(from, to);
    }

    const getRecipes = async (from, to) => {
        setLoading(true);
        
        await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`)
            .then(response => {
                console.log(response);
                setRecipes(response.data.hits);
                setLoading(false);
                setTotal(response.data.count);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const changeHandler = (e) => {
        setSearch(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div>
            <div style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
                <img src={img} alt="" style={{ width: '100%' }} />
            </div>
            <Container>
                <div className="row">
                    <div className="col-12 pl-5 pr-5 pb-4 shadow" style={{ marginTop: '-100px', backgroundColor: '#fff', borderRadius: '10px' }}>
                        <h1 className="font-weight-bold text-center text-body mb-4 pt-5" style={{ fontFamily: 'Kalam' }}>Find a recipe</h1>
                        <form className="mb-5" onSubmit={submitHandler}>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control" placeholder="Search recipe..." name="recipe" value={search} onChange={changeHandler} autoComplete="off" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-danger">Find Recipe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

            <Container className="mt-5">
                <div className="row">
                    {/* <CircularProgress /> */}
                    { loading ? <Spinner /> : recipes.map((recipe, i) => (
                        <Recipe
                            key={i}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredientLines}
                            kal={Math.round(recipe.recipe.calories).toLocaleString()}
                            detail={recipe.recipe}
                        />
                    ))}
                </div>

                <div className="d-flex w-100 justify-content-center">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={total}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        innerClass="pagination pagination-circle pg-red"
                        itemClass="page-item"
                        linkClass="page-link waves-effect waves-effect"
                        prevPageText="&laquo;"
                        nextPageText="&raquo;"
                        firstPageText="First"
                        lastPageText="Last"
                    />
                </div>
                
            </Container>
        </div>
    )
}

export default Home