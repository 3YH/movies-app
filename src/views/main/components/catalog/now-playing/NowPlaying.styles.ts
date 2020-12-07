import { Box } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled(Box)`
  padding-top: ${({ theme }) => `
  ${theme.spacing(6)}px;
  `};
  padding-left: 0;
`;

// Gebruikt bovenstaande container met enkele aanpassingen.

const MovieContainer = styled(Container)`
  ${({ theme }) => `
  margin-bottom: ${theme.spacing(8)}px;
  padding-top: ${theme.spacing(1)}px;
  `};
`;

export { Container, MovieContainer };
