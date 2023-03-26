import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';

const App = () => {
  return (
    <Box bg="teal.600" color="white" height="100vh" paddingTop={100}>
      <Container maxW="3xl" centerContent>
        <h1>Hello WOrld</h1>
      </Container>
    </Box>
  );
};

export default App;
