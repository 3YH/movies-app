import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Movie } from 'views/main/models/Movie';
import MovieCard from '../movie-card/MovieCard';
import { Container } from './MovieGrid.styles';

export default function MovieGrid() {
  const [movies, setMovies] = useState([] as Movie[]);

  function requestMovies() {
    axios
      .get('http://www.omdbapi.com/?s=Dark&apikey=1e139f3a')
      .then((res) => {
        if (res.data) {
          setMovies(res.data.Search);
        } else {
          throw new Error(res.data);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <Container
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {movies.map((movie: Movie, idx) => (
        <Grid item xs>
          <MovieCard key={idx} movie={movie} nowPlaying={false} />
        </Grid>
      ))}
    </Container>
  );
}
