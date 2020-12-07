import { Box } from '@material-ui/core';
import React from 'react';
import MovieGrid from './movie-grid/MovieGrid';
import NowPlaying from './now-playing/NowPlaying';

export default function MovieCatalog() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <NowPlaying />
      <MovieGrid />
    </Box>
  );
}
