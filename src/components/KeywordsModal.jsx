import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import { IoCopy } from 'react-icons/io5';

const copyTextToClipboard = (text) => {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  const toast = useToast();

  const copyText = () => {
    copyTextToClipboard(keywords);
    toast({
      title: 'Copied to Clipboard',
      status: 'info',
      variant: 'left-accent',
      duration: '1000',
      isClosable: false,
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {loading ? (
              <CircularProgress isIndeterminate color="teal.700" />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              leftIcon={<IoCopy />}
              mr={2}
              onClick={copyText}
            >
              Copy
            </Button>
            <Button colorScheme="teal" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;
