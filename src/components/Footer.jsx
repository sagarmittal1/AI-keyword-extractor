import { Text, Box, Flex } from '@chakra-ui/react';
import { SiOpenai } from 'react-icons/si';

const Footer = () => {
  return (
    <Box marginTop={30}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="md">Powered by Open AI</Text>
        <SiOpenai
          size={20}
          title="OpenAI"
          color="black"
          style={{ marginLeft: '10px' }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
