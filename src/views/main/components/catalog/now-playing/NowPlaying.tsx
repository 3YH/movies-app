import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Movie } from '../../../models/Movie';
import MovieCard from '../movie-card/MovieCard';
import { Container, MovieContainer } from './NowPlaying.styles';

export default function NowPlaying() {
  const [movies, setMovies] = useState([] as Movie[]);

  function requestMovies() {
    axios
      .all([
        axios.get('http://www.omdbapi.com/?t=Tenet&apikey=1e139f3a'),
        axios.get('http://www.omdbapi.com/?t=Parasite&apikey=1e139f3a'),
        axios.get('http://www.omdbapi.com/?t=The+Gentlemen&apikey=1e139f3a'),
      ])
      .then((results) => {
        for (const item of results) {
          setMovies((movies) => [...movies, item.data]);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <Container display="flex" flexDirection="column" alignSelf="center">
      <Typography variant="h5">Now playing</Typography>
      <MovieContainer display="flex" flexDirection="row" alignItems="center">
        {movies.map((movie: Movie, idx) => (
          <MovieCard key={idx} movie={movie} nowPlaying={true} />
        ))}
      </MovieContainer>
    </Container>
  );
}
