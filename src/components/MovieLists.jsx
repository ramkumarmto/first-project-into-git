import React from 'react'
import './MovieLists.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MovieLists(props) {
    // console.log("movie lists")
    // console.log(props.filteredMovie);
    return (
        <>
            <div className="flex-container">
                {props.items.filter((movie) => movie.movieName.toLowerCase().includes(props.query)).map((item) => {
                    return (

                        <div className="movie_lists">
                            <div className="movie" key={Math.random().toString()}>
                                <div className="movie_header_box">
                                    <h4 className='movie_name'>Movie : {item.movieName}</h4>

                                </div>
                                <div className="movie_details_box">
                                    <h4 className='imdb_ratings'> IMDB RANK - {item.imdb_rank}</h4>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>


        </>
    )
}

export default MovieLists