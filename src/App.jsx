
import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputMovies from './components/InputMovies';
import MovieLists from './components/MovieLists';
import MovieStats from './components/MovieStats';


const MOVIE_LIST = [
  {
    id: 'm1',
    movieName: 'batman',
    imdb_rank: 9,

  },
  {
    id: 'm2',
    movieName: 'spiderman',
    imdb_rank: 6,

  },
  {
    id: 'm3',
    movieName: 'dangal',
    imdb_rank: 8,

  },
  {
    id: 'm4',
    movieName: 'Robo',
    imdb_rank: 8,

  },
  {
    id: 'm5',
    movieName: 'one',
    imdb_rank: 5,

  },
  {
    id: 'm6',
    movieName: 'KGF',
    imdb_rank: 7,

  },
];



function App() {
  // const [filteredYear, setFilteredYear] = useState('');
  const [movies, setMovies] = useState(MOVIE_LIST);
  const [query, setQuery] = useState('');
  console.log(query)

  const saveMovieDataHandler = (newMovieList) => {

    setMovies([newMovieList, ...movies]);
    // console.log(newMovieList)
    // setMovies((prevMovies) => {
    //   return [newMovieList, ...prevMovies]
    // })
    // const movieData = {
    //   ...newMovieList,
    //   id: Math.random().toString()
    // }
    // console.log(movieData);
    // console.log("hello")

  }

  // const filterChangeHandler = (event) => {
  //   setFilteredYear(event.target.value);
  // }
  // const filteredMovie = movies.filter((item) =>{
  //   return item.imdb_rank === filteredYear;
   
  // })
  // console.log(filteredMovie)
  return (
    <>
      <h1 className='text-center mb-2'>My Big Movie Lists</h1>
      <hr className='line_shadow' />
      <div className="container-fluid mt-4 ">
        <div className="row">
          <div className="col-7">
            <div className='filterContainer mb-2'>
              <div className='searchBox'> <input type="text" placeholder='Search by Name..' className='form-control'
              onChange={(event) =>{ setQuery(event.target.value)}}

              
              />
              </div>
              <div className="sortBox">
                {/* <select class="form-select" aria-label="Default select example" onChange={filterChangeHandler} value={filteredYear}> */}
                <select class="form-select" aria-label="Default select example">
                  <option value='sortByName'>Sort by Name</option>
                  <option value="SortByRatings">Sort by Ratings</option>
                </select>
              </div>
            </div>


            <MovieLists items={movies} query={query} />
            {/* <MovieLists items={movies} filteredMovie={filteredMovie} /> */}

          </div>


          <div className="col-4">
            <h1>Add Movie</h1>
            <InputMovies onSaveMovieData={saveMovieDataHandler} />

            <MovieStats />
          </div>



        </div>
      </div>

    </>
  );
}

export default App;
