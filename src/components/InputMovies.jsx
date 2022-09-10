import React, { useState } from 'react'

function InputMovies(props) {
    const [enterMovie, setEnterMovie] = useState("");
    const [enterIMDB, setEnterIMDB] = useState();

    const newMovieHandler = (event) => {
        setEnterMovie(event.target.value)

    }
    const imdbHandler = (event) => {
        setEnterIMDB(event.target.value);
        

    }
    const formSubmitHandler = (event) => {
        event.preventDefault();

        const newMovieData = {
            movieName : enterMovie,
            imdbRating : enterIMDB,
        }
        // console.log(newMovieData)
        props.onSaveMovieData(newMovieData);
        setEnterMovie('');
        setEnterIMDB('');
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <input type="text" placeholder='Enter Movie Name' className='form-control mb-3' onChange={newMovieHandler} value={enterMovie} />
                <input type="text" placeholder='IMDB Ranking' className='form-control mb-3' onChange={imdbHandler} value ={enterIMDB} />
                <div className='mb-3'>
                    <button className='btn btn-primary' type='submit' style={{ width: '100%' }}>Add</button>
                </div>
            </form>
        </>

    )
}

export default InputMovies;