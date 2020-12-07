import { Card } from '@material-ui/core';
import styled from 'styled-components';

// Card styles worden gewijzigd op basis van de nowPlaying en background props.

interface IProps {
  nowPlaying?: boolean;
  background?: string;
}

const MovieCard = styled(Card)`
  display: flex;
  align-self: center;
  margin: ${({ theme }) => `
  ${theme.spacing(2)}px
  `};
  width: ${(props: IProps) => (props.nowPlaying ? '300px' : '218px')};
  height: ${(props: IProps) => (props.nowPlaying ? '445px' : '310px')};
  background: ${(props: IProps) =>
    `url(${props.background}) no-repeat center center`};
  background-size: cover;
`;

const Title = styled('p')`
  text-align: center;
  font-size: ${(props: IProps) => (props.nowPlaying ? '22px' : '16px')};
  margin: 0;
`;

export { MovieCard, Title };
