import { useState } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');
  const toast = useToast();

  const submitText = (e) => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter some text to find keywords',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="teal.500"
        color="white"
        height={200}
        marginTop={5}
        p={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="teal.800"
        width="100%"
        marginTop="6px"
        _hover={{ bg: 'teal.900' }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
