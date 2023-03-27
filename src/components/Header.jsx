import { Heading, Image, Text, Icon } from '@chakra-ui/react';
import { TbBulbFilled } from 'react-icons/tb';

const Header = () => {
  return (
    <>
      <Icon as={TbBulbFilled} boxSize={100} />
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={20}>
        Paste the text below & it will extract the keywords for you.
      </Text>
    </>
  );
};

export default Header;
