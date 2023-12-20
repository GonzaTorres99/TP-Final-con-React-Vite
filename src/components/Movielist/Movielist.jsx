import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async () => {
    try {
      const apiKey = '82161c98a46138c6f062c4b18e800961';
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error('Error al obtener datos de la API TMDb');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const searchMovies = async () => {
        try {
          const apiKey = '82161c98a46138c6f062c4b18e800961';
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`
          );

          if (response.ok) {
            const data = await response.json();
            setMovies(data.results);
          } else {
            console.error('Error al realizar la búsqueda en la API TMDb');
          }
        } catch (error) {
          console.error('Error en la solicitud de búsqueda:', error);
        }
      };

      searchMovies();
    } else {

      fetchMovies();
    }
  }, [searchQuery]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, { ...movie, posterUrl: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }]);

  };

  



const removeFromFavorites = (movieId) => {
  const updatedFavorites = favorites.filter((favorite) => favorite.id !== movieId);
  setFavorites(updatedFavorites);
};


  return (
    <div>
      <div className="container mt-3">
        {selectedMovie && (
          <div>
            <h2 className="mb-3  text-white">Detalles de la película</h2>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  className="img-fluid rounded  text-white"
                />
              </div>
              <div className="col-md-8">
                <h3 className=' text-white'>{selectedMovie.title}</h3>
                <p className="mb-3  text-white">{selectedMovie.overview}</p>
                <p className=' text-white'>Fecha de lanzamiento: {selectedMovie.release_date}</p>
                <p className=' text-white'>Puntuación: {selectedMovie.vote_average}</p>

                <p className=' text-white'>Duración: {selectedMovie.runtime} minutos</p>

                <p className=' text-white'>
                  Trailer: <a href={`https://www.youtube.com/watch?v=${selectedMovie.trailerKey}`} target='blank'>Ver Trailer</a>
                </p>

              </div>
            </div>
          </div>
        )}
      </div>
      <div className='container 1 mt-5'>
        <h1 className='mt-3 mb-4 display-1 text-white'>Mi MovieList</h1>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control mb-3"
        />
        <ul className='row' >
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieClick(movie)} className='col-md-3 mb-3 list-unstyled'>
              <div className='card'>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}
                  className='card-img-top'
                />
                <h5 className='card-title text-center'>{movie.title}</h5>
                <button onClick={() => handleAddToFavorites(movie)} className="btn btn-primary">Agregar a favoritos</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2 className='mt-3 mb-4 display-1 text-white' id='favoritos'>Favoritos</h2>
      <ul className='row'>
        {favorites.map((favorite) => (
          <li className='col-md-3 mb-3 list-unstyled' key={favorite.id}>
            <div className="card">
              <img src={favorite.posterUrl} className="card-img-top" alt={favorite.title} style={{ maxWidth: '150px', maxHeight: '100%', margin: 'auto' }} />
              <div className="card-body">
                <h5 className="card-title">{favorite.title}</h5>
                <p className="card-text"></p>
                <button className="btn btn-danger" onClick={() => removeFromFavorites(favorite.id)}>
                  Quitar de Favoritos
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
