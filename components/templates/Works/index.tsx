import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from '@chakra-ui/react';
import * as S from './styles';

const Works = () => {
  return (
    <S.Layout>
      <S.Title as="h1">Works</S.Title>
      <S.Underline />

      <Box h="calc(100% - 4rem)" mb="1rem">
        <Heading as="h1" mb="1rem">
          Work name
        </Heading>
        <Image
          src="https://bit.ly/2Z4KKcF"
          alt="Rear view of modern home with pool"
          mb="1rem"
        />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          beatae numquam debitis! Sit non nostrum aut natus totam! Beatae
          sapiente tenetur debitis unde officia omnis animi nemo repudiandae
          neque recusandae.
        </Text>
      </Box>
      <Flex align="center" justify="center">
        <Button>
          <ChevronLeftIcon />
        </Button>
        <Progress
          color="gray.200"
          variant="link"
          value={20}
          w={200}
          m="0 1rem"
          h={1}
        />
        <Button>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </S.Layout>
  );
};

export default Works;
