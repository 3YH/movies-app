import { Container } from './LayoutContainer.styles';

interface IProps {
  children: any;
}

export default function LayoutContainer(props: IProps) {
  const { children } = props;
  return (
    <div>
      <Container display="flex" justifyContent="center" flexDirection="column">
        {children}
      </Container>
    </div>
  );
}
