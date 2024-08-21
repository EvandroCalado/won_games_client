import { Container, Empty } from '@/components';
import { Base } from '@/templates';

const NotFound = () => {
  return (
    <Base>
      <Container>
        <Empty
          title="Page not found"
          description="Opps! The page you are looking for does not exist. Go back to store and explore great games and offers"
          hasLink
        />
      </Container>
    </Base>
  );
};

export default NotFound;
