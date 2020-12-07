import { Box } from '@material-ui/core';
import React from 'react';
import { Movie } from '../../../models/Movie';
import { MovieCard, Title } from './MovieCard.styles';

// MovieCard wordt gebruikt door MovieGrid en NowPlaying componenten.

interface IProps {
  movie: Movie;
  nowPlaying: boolean;
}

export default function NowPlayingCard(props: IProps) {
  const { movie, nowPlaying } = props;

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <MovieCard background={movie.Poster} nowPlaying={nowPlaying} />
      <Title nowPlaying={nowPlaying}>{movie.Title}</Title>
    </Box>
  );
}
